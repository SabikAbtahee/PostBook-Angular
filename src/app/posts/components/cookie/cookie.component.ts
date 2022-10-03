import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-cookie',
	templateUrl: './cookie.component.html',
	styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
	constructor(public dialogRef: MatDialogRef<CookieComponent>) {}

	ngOnInit(): void {}

	closeDialog() {
		this.dialogRef.close();
	}

	saveLocal() {
		localStorage.setItem('cookie', 'wow');
		this.closeDialog();
	}
}
