import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs';
import { RootService } from '../services/root.service';

@Component({
	selector: 'app-tool-bar',
	templateUrl: './tool-bar.component.html',
	styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
	username: string;
	constructor(private rootService: RootService) {}

	ngOnInit(): void {
		this.getLoggedInUser();
	}

	alterSideNav() {
		this.rootService.alterSideNav();
	}

	redirectToSignUp() {
		this.rootService.redirectToSignUp();
	}

	getLoggedInUser() {
		this.rootService
			.getLoggedInUser()
			.pipe(
				first(),
				map((res) => {
					if (res?.body) return res.body;
					return null;
				})
			)
			.subscribe((res) => {
				this.rootService.currentUser.next(res);
				this.username = res?.UserName;
			});
	}
}
