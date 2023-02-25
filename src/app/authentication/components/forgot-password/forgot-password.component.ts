import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, map, takeUntil } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse, ErrorToastComponent, SuccessToastComponent, UtilsService } from '@shared';
import { ForgotPasswordPayload } from '../../interfaces/auth.interface';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm: FormGroup;
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

	initForm() {
		this.forgotPasswordForm = this.fb.group({
			Email: [null, [Validators.required, Validators.email]]
		});
	}

	submit() {
		if (this.forgotPasswordForm.valid) {
			this.isLoading = true;
			this.authService
				.sendResetPasswordLink(this.prepareForgotPasswordPayload())
				.pipe(
					takeUntil(this._unsubscribeAll),
					map((res) => {
						if (res?.body) return res.body;
						return null;
					})
				)
				.subscribe({
					next: (): void => {
						this.isLoading = false;
						this.utilService.openSnackBarGivenComponent(SuccessToastComponent, {
							Data: 'Reset Password Link Sent Successfully'
						});
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

	prepareForgotPasswordPayload(): ForgotPasswordPayload {
		return {
			Email: this.forgotPasswordForm.value.Email
		};
	}

	gotoSignIn() {
		this.authService.redirectToSignIn();
	}

	ngOnDestroy() {
		this._unsubscribeAll.next(true);
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}
}
