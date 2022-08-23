import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
		children: [
			{
				path: 'posts',
				loadChildren: () => import('../posts/posts.module').then((module) => module.PostsModule)
			},
			{
				path: 'courses',
				loadChildren: () =>
					import('../courses/courses.module').then((module) => module.CoursesModule)
			}
		]
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
	},

	{
		path: '**',
		component: NotFoundComponent
	}
];
