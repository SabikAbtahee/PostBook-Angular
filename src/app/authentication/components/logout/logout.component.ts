import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {}

	ngOnInit(): void {}

	logout() {
		this.authenticationService
			.logout()
			.pipe(first())
			.subscribe({
				next: (res) => {
					this.authenticationService.redirectToSignIn();
				},
				error: (err) => {
					this.authenticationService.redirectToSignIn();
				}
			});
	}
}
