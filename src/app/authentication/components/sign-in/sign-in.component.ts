import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '@shared';
import { Subject, takeUntil } from 'rxjs';
import { SignIn } from '../../interfaces/auth.interface';
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
	constructor(private fb: FormBuilder, private authService: AuthenticationService) {
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
			Password: [null, [Validators.required]]
		});
	}

	prepareSignInPayload(): SignIn {
		return {
			UserName: this.signInForm.value.UserName,
			Password: this.signInForm.value.Password
		};
	}

	submit() {
		this.authService
			.signIn(this.prepareSignInPayload())
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe({
				next: (res) => console.log('res', res),
				error: (err: HttpErrorResponse) => {
					let a: ErrorResponse = err.error;
					console.log(a.message);
				}
			});
	}
}
