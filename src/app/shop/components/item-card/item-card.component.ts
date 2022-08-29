import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopItem } from '../../interfaces/shop.interface';
import { ShopCommandComponent } from '../shop-command/shop-command.component';

@Component({
	selector: 'app-item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
	item: ShopItem;
	@Input() set itemInput(value: ShopItem) {
		this.item = value;
	}
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	buyItem(id: string) {
		this.dialog.open(ShopCommandComponent, {
			width: '800px'
		});
	}
}
