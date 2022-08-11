import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { SuccessToastComponent } from './components/success-toast/success-toast.component';
import { ErrorToastComponent } from './components/error-toast/error-toast.component';
import { MaterialModule } from './material.module';
import { UtilsService } from './services/utils.service';

@NgModule({
	declarations: [SnackBarComponent, ErrorToastComponent, SuccessToastComponent],
	imports: [CommonModule, MaterialModule, FlexLayoutModule, ReactiveFormsModule],
	exports: [
		FlexLayoutModule,
		ReactiveFormsModule,
		SnackBarComponent,
		ErrorToastComponent,
		SuccessToastComponent
	],
	entryComponents: [SnackBarComponent],
	providers: [UtilsService]
})
export class SharedModule {}
