import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { UtilsService } from '../../services/utils.service';

@Component({
	selector: 'app-success-toast',
	templateUrl: './success-toast.component.html'
})
export class SuccessToastComponent implements OnInit {
	@Input() message: string;

	constructor(
		public snackBarRef: MatSnackBarRef<SuccessToastComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: any,
		private utilService: UtilsService
	) {}

	ngOnInit() {}
	closeSnackBar() {
		this.utilService.closeSnackBar();
	}
}
