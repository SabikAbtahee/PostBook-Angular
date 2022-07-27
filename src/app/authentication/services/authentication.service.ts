import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
	constructor(private http: HttpClient) {}

	signIn() {
		return this.http.post(
			environment.SignIn,
			{
				UserName: 'SabikAbtahee',
				Password: '1qazZAQ!'
			},
			{
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				}),
				withCredentials: true,
				observe: 'response'
			}
		);
	}
}
