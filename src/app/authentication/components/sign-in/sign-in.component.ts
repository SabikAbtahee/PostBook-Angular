import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environment';
import { ErrorResponse, ErrorToastComponent, ModalOpenTimer, UtilsService } from '@shared';
import { map, Subject, takeUntil } from 'rxjs';
import { SignInPayload, TokenResponse } from '../../interfaces/auth.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
	signInForm: FormGroup;
	isLoading: boolean;
	_unsubscribeAll: Subject<any>;
	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private utilService: UtilsService
	) {
		this._unsubscribeAll = new Subject();
	}

	ngOnInit(): void {
		this.initForm();
	}

	ngOnDestroy() {
		this._unsubscribeAll.next(true);
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}

	initForm() {
		this.signInForm = this.fb.group({
			UserName: [null, [Validators.required]],
			Password: [null, [Validators.required, Validators.pattern(environment.PasswordRegex)]]
		});
	}

	prepareSignInPayload(): SignInPayload {
		return {
			UserName: this.signInForm.value.UserName,
			Password: this.signInForm.value.Password
		};
	}

	submit() {
		if (this.signInForm.valid) {
			this.isLoading = true;
			this.authService
				.signIn(this.prepareSignInPayload())
				.pipe(
					takeUntil(this._unsubscribeAll),
					map((res) => {
						if (res?.body) return res.body;
						return null;
					})
				)
				.subscribe({
					next: (res: TokenResponse): void => {
						this.isLoading = false;
						this.authService.setTokens(res.access_token, res.refresh_token);
						this.authService.redirectToHome();
					},
					error: (err: HttpErrorResponse) => {
						this.isLoading = false;
						let error: ErrorResponse = err.error;
						this.utilService.openSnackBarGivenComponent(ErrorToastComponent, {
							Data: error.message[0]
						});
					}
				});
		}
	}

	goToSignUp() {
		this.authService.redirectToSignUp();
	}

	goToHome() {
		this.authService.redirectToHome();
	}

	gotoForgotPassword() {
		this.authService.redirectToForgotPassword();
	}
}
