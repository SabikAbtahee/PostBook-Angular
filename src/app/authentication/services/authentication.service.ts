import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PortalKeys } from '@shared';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'src/app/core/services/cookie.service';
import { environment } from '../../../environments/environment';
import { SignInPayload, SignUpPayload } from '../interfaces/auth.interface';

@Injectable()
export class AuthenticationService {
	constructor(
		private http: HttpClient,
		private cookieService: CookieService,
		private router: Router
	) {}

	signIn(signInPayload: SignInPayload): Observable<any> {
		return this.http.post(environment.SignIn, signInPayload, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	signUp(signUpPayload: SignUpPayload): Observable<any> {
		return this.http.post(environment.SignUp, signUpPayload, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	logout(): Observable<any> {
		return this.http
			.post(environment.LogOut, {
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				}),
				withCredentials: true,
				observe: 'response'
			})
			.pipe(
				tap((res) => {
					this.removeTokens();
				})
			);
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
