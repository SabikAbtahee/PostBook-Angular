import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShopItem } from '../../interfaces/shop.interface';
import { ShopService } from '../../services/shop.service';

@Component({
	selector: 'app-shop-command',
	templateUrl: './shop-command.component.html',
	styleUrls: ['./shop-command.component.scss']
})
export class ShopCommandComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<ShopCommandComponent>,
		private shopService: ShopService,
		@Inject(MAT_DIALOG_DATA) public data: ShopItem
	) {}

	ngOnInit(): void {}

	submit() {
		this.closeDialog();
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
