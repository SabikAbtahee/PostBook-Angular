import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RootService {
	$isSideNavExpanded: BehaviorSubject<boolean>;
	isSideNavExpanded: boolean = true;

	currentUser: BehaviorSubject<any>;

	constructor(private router: Router, private http: HttpClient) {
		this.$isSideNavExpanded = new BehaviorSubject<boolean>(true);
		this.currentUser = new BehaviorSubject<any>(null);
	}

	alterSideNav() {
		this.isSideNavExpanded = !this.isSideNavExpanded;
		this.$isSideNavExpanded.next(this.isSideNavExpanded);
	}

	redirectToSignUp() {
		this.router.navigate(['/authentication/sign-up']);
	}

	getLoggedInUser(): Observable<any> {
		return this.http.get(`${environment.User}/current`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}
}
