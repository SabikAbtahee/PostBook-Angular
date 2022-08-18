import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { AuthenticationService } from './services/authentication.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '@shared';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sign-in',
		pathMatch: 'full'
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
		SetNewPasswordComponent,
		LogoutComponent
	],
	imports: [CommonModule, MaterialModule, SharedModule, CoreModule, RouterModule.forChild(routes)],
	exports: [LogoutComponent],
	providers: [AuthenticationService]
})
export class AuthenticationModule {}
