import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '@shared';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { environment } from '@environment';

@Component({
	selector: 'app-set-new-password',
	templateUrl: './set-new-password.component.html',
	styleUrls: ['./set-new-password.component.scss']
})
export class SetNewPasswordComponent implements OnInit {
	setPasswordForm: FormGroup;
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
		this.setPasswordForm = this.fb.group({
			Password: [null, [Validators.required, Validators.pattern(environment.PasswordRegex)]],
			ConfirmPassword: [null, [Validators.required, Validators.pattern(environment.PasswordRegex)]]
		});
	}

	submit() {}

	ngOnDestroy() {
		this._unsubscribeAll.next(true);
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}
}
