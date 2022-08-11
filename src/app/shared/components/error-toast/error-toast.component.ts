import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { UtilsService } from '../../services/utils.service';

@Component({
	selector: 'app-error-toast',
	templateUrl: './error-toast.component.html'
})
export class ErrorToastComponent implements OnInit {
	constructor(
		public snackBarRef: MatSnackBarRef<ErrorToastComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: any,
		private utilService: UtilsService
	) {}

	ngOnInit() {}
	closeSnackBar() {
		this.utilService.closeSnackBar();
	}
}
