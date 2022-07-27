import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	signInForm: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthenticationService) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm() {
		this.signInForm = this.fb.group({
			Email: [null, [Validators.email, Validators.required]],
			Password: [null, [Validators.required]]
		});
	}

	submit() {
		this.authService.signIn().subscribe((res) => {
			console.log(res);
		});
		console.log(this.signInForm.value);
		console.log(this.signInForm.valid);
	}
}
