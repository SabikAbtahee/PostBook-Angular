import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PortalKeys } from '@shared';
import { Observable, of, tap } from 'rxjs';
import { CookieService } from '../../core/services/cookie.service';
import { RootService } from '../../root/services/root.service';
import { environment } from '../../../environments/environment';
import { SignInPayload, SignUpPayload } from '../interfaces/auth.interface';

@Injectable()
export class AuthenticationService {
	constructor(
		private http: HttpClient,
		private cookieService: CookieService,
		private router: Router,
		private rootService: RootService
	) {}

	signIn(signInPayload: SignInPayload) {
		let a = localStorage.getItem(signInPayload.UserName);
		if (a) {
			this.rootService.currentUser.next({ ...JSON.parse(a), Roles: ['Admin'] });

			signInPayload.Password == JSON.parse(a).Password;
			this.redirectToHome();
		}
		return false;

		// return this.http.post(environment.SignIn, signInPayload, {
		// 	headers: new HttpHeaders({
		// 		'Content-Type': 'application/json'
		// 	}),
		// 	withCredentials: true,
		// 	observe: 'response'
		// });
	}

	signUp(signUpPayload: SignUpPayload) {
		this.rootService.currentUser.next({ ...signUpPayload, Roles: ['Admin'] });

		localStorage.setItem(signUpPayload.UserName, JSON.stringify(signUpPayload));
		this.redirectToHome();

		// return this.http.post(environment.SignUp, signUpPayload, {
		// 	headers: new HttpHeaders({
		// 		'Content-Type': 'application/json'
		// 	}),
		// 	withCredentials: true,
		// 	observe: 'response'
		// });
	}

	logout(): Observable<any> {
		this.redirectToSignIn();
		return of(null);
		// return this.http
		// 	.post(environment.LogOut, {
		// 		headers: new HttpHeaders({
		// 			'Content-Type': 'application/json'
		// 		}),
		// 		withCredentials: true,
		// 		observe: 'response'
		// 	})
		// 	.pipe(
		// 		tap((res) => {
		// 			this.removeTokens();
		// 		})
		// 	);
	}

	removeTokens() {
		this.cookieService.eraseCookie(PortalKeys.AccessToken);
		this.cookieService.eraseCookie(PortalKeys.RefreshToken);
	}

	setTokens(accessToken: string, refreshToken: string) {
		this.cookieService.eraseAndSetCookie(PortalKeys.AccessToken, accessToken);
		this.cookieService.eraseAndSetCookie(PortalKeys.RefreshToken, refreshToken);
	}

	redirectToHome() {
		this.router.navigate(['/posts']);
	}

	redirectToSignUp() {
		this.router.navigate(['/authentication/sign-up']);
	}

	redirectToSignIn() {
		this.router.navigate(['/authentication/sign-in']);
	}
}
