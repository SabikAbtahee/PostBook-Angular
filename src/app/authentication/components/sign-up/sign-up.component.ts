import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '@environment';
import {
	ErrorResponse,
	ErrorToastComponent,
	ModalOpenTimer,
	SuccessToastComponent,
	UtilsService
} from '@shared';
import { map, Subject, takeUntil } from 'rxjs';
import { SignUpPayload, TokenResponse } from '../../interfaces/auth.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;
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
		this.signUpForm = this.fb.group({
			Email: [null, [Validators.required, Validators.email]],
			UserName: [null, [Validators.required]],
			Password: [null, [Validators.required, Validators.pattern(environment.PasswordRegex)]]
		});
	}

	prepareSignUpPayload(): SignUpPayload {
		return {
			UserName: this.signUpForm.value.UserName,
			Email: this.signUpForm.value.Email,
			Password: this.signUpForm.value.Password
		};
	}

	goToSignIn() {
		this.authService.redirectToSignIn();
	}

	submit() {
		if (this.signUpForm.valid) {
			this.isLoading = true;
			this.authService
				.signUp(this.prepareSignUpPayload())
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
						this.utilService.openSnackBarGivenComponent(SuccessToastComponent, {
							Data: 'User Created Successfully'
						});
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
}
