import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sign-in'
	},
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: 'sign-up',
		component: SignUpComponent
	},
	{
		path: 'forget-password',
		component: ForgotPasswordComponent
	},
	{
		path: 'reset-password',
		component: SetNewPasswordComponent
	}
];

@NgModule({
	declarations: [
		SignUpComponent,
		SignInComponent,
		ForgotPasswordComponent,
		SetNewPasswordComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		SharedModule,
		RouterModule.forChild(routes),
		HttpClientModule
	],
	providers: [AuthenticationService]
})
export class AuthenticationModule {}
