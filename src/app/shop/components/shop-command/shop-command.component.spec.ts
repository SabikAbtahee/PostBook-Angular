import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCommandComponent } from './shop-command.component';

describe('ShopCommandComponent', () => {
	let component: ShopCommandComponent;
	let fixture: ComponentFixture<ShopCommandComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShopCommandComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ShopCommandComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
