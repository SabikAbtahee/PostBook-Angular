import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalOpenTimer } from '../constants/postbook.const';
import { ToastInfo } from '../models/toast-message.model';

@Injectable()
export class UtilsService {
	constructor(private snackBar: MatSnackBar) {}

	openSnackBarGivenComponent(comp: any, toastInfo: ToastInfo) {
		toastInfo = { ...new ToastInfo(), ...toastInfo };
		this.snackBar.openFromComponent(comp, {
			duration: toastInfo.Duration,
			verticalPosition: toastInfo.VrPosition,
			horizontalPosition: toastInfo.HrPosition,
			panelClass: toastInfo.PanelClass,
			data: toastInfo.Data
		});
	}
	closeSnackBar() {
		this.snackBar.dismiss();
	}
}
