import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RootService } from '../services/root.service';

@Component({
	selector: 'app-tool-bar-side-nav-layout',
	templateUrl: './tool-bar-side-nav-layout.component.html',
	styleUrls: ['./tool-bar-side-nav-layout.component.scss']
})
export class ToolBarSideNavLayoutComponent implements OnInit {
	$isSideNavExpanded: Subject<boolean>;

	constructor(private rootService: RootService) {}

	ngOnInit(): void {
		this.$isSideNavExpanded = this.rootService.$isSideNavExpanded;
	}
}
