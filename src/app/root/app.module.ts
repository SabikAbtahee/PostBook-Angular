import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-default/app.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { ToolBarSideNavLayoutComponent } from './tool-bar-side-nav-layout/tool-bar-side-nav-layout.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RootService } from './services/root.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ConfigModule } from '../config/config.module';
import { MaterialModule } from '../shared/material.module';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
	declarations: [
		AppComponent,
		BlankLayoutComponent,
		ToolBarSideNavLayoutComponent,
		ToolBarComponent,
		SideNavigationComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		CoreModule,
		ConfigModule,
		MaterialModule,
		AuthenticationModule
	],
	providers: [RootService],
	bootstrap: [AppComponent]
})
export class AppModule {}
