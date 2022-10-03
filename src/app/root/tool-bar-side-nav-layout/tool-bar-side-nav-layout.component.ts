import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@shared';
import { Subject } from 'rxjs';
import { RootService } from '../services/root.service';

@Component({
	selector: 'app-tool-bar-side-nav-layout',
	templateUrl: './tool-bar-side-nav-layout.component.html',
	styleUrls: ['./tool-bar-side-nav-layout.component.scss']
})
export class ToolBarSideNavLayoutComponent implements OnInit {
	$isSideNavExpanded: Subject<boolean>;
	navigation = Navigation;
	selectedRow: number;
	constructor(private rootService: RootService, private router: Router) {}

	ngOnInit(): void {
		this.$isSideNavExpanded = this.rootService.$isSideNavExpanded;
		this.checkRow();
	}

	route(url: string) {
		this.router.navigate([url]).then((res) => {
			this.checkRow();
		});
	}
	selectRow(index: number) {
		this.selectedRow = index;
	}

	checkRow() {
		let currentUrl = this.router.url;
		let count = 0;
		for (let i of this.navigation) {
			if (currentUrl.includes(`/${i.Route}`)) {
				this.selectedRow = count;
				break;
			}
			count += 1;
		}
	}
}
