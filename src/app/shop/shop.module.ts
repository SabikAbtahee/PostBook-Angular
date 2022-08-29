import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';
import { ShopService } from './services/shop.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { MaterialModule } from '../shared/material.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ShopCommandComponent } from './components/shop-command/shop-command.component';

const routes: Routes = [
	{
		path: '',
		component: ShopComponent
	}
];

@NgModule({
	declarations: [ShopComponent, ItemCardComponent, ShopCommandComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
	providers: [ShopService]
})
export class ShopModule {}
