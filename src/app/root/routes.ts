import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { ToolBarSideNavLayoutComponent } from './tool-bar-side-nav-layout/tool-bar-side-nav-layout.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'authentication',
		pathMatch: 'full'
	},
	{
		path: '',
		component: ToolBarSideNavLayoutComponent,
		children: []
	},
	{
		path: '',
		component: BlankLayoutComponent,
		children: [
			{
				path: 'authentication',
				loadChildren: () =>
					import('../authentication/authentication.module').then(
						(module) => module.AuthenticationModule
					)
			}
		]
	}
];
