import { ModalOpenTimer } from '@shared';

export class ToastInfo {
	MessageKey?: string;
	Message?: string;
	Action?: string;
	Duration?: number;
	VrPosition?: any;
	HrPosition?: any;
	PanelClass?: string;
	Data: any;

	constructor() {
		this.MessageKey = '';
		this.Message = '';
		this.Action = '';
		this.Duration = ModalOpenTimer;
		this.VrPosition = 'top';
		this.HrPosition = 'right';
		this.PanelClass = 'snackbar';
		this.Data = null;
	}
}
