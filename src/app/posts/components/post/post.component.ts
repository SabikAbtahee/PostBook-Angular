import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '@shared';
import { first, map } from 'rxjs';
import { RootService } from '../../../root/services/root.service';
import { PostService } from '../../services/post.service';
import { PostCommandComponent } from '../post-command/post-command.component';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	constructor(
		private postService: PostService,
		public dialog: MatDialog,
		private rootService: RootService
	) {}
	posts: Post[];
	user: any;
	ngOnInit(): void {
		this.rootService.currentUser.subscribe((res) => {
			this.user = res;
			this.getPosts();
		});
	}

	getPosts() {
		this.postService
			.getPosts()
			.pipe(
				first(),
				map((res) => {
					if (res?.body) return res.body;
					return null;
				})
			)
			.subscribe((res) => {
				const posts: Post[] = res;
				this.posts = posts.filter((res) => res.Author._id == this.user._id || res.Status == 1);
			});
	}

	createPost() {
		this.dialog
			.open(PostCommandComponent, {
				width: '800px'
			})
			.afterClosed()
			.subscribe((res) => {
				this.getPosts();
			});
	}

	//   editPost(){
	//     this.dialog.open(PostCommandComponent,{
	// 				width: '800px'
	//       data:
	//     })
	//   }
}
