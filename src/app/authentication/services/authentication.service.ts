import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SignIn } from '../interfaces/auth.interface';

@Injectable()
export class AuthenticationService {
	constructor(private http: HttpClient) {}

	signIn(signInPayload: SignIn) {
		return this.http.post(environment.SignIn, signInPayload, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}
}
