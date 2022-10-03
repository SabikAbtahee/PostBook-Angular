import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MaterialModule } from '../shared/material.module';
import { PostService } from './services/post.service';
import { SharedModule } from '../shared/shared.module';
import { PostCommandComponent } from './components/post-command/post-command.component';
import { CookieComponent } from './components/cookie/cookie.component';

const routes: Routes = [
	{
		path: '',
		component: PostComponent
	}
];

@NgModule({
	declarations: [PostComponent, PostCardComponent, PostCommandComponent, CookieComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
	providers: [PostService]
})
export class PostsModule {}
