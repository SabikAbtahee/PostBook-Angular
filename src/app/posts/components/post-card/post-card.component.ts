import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '@shared';
import { RootService } from '../../../root/services/root.service';
import { PostService } from '../../services/post.service';
import { PostCommandComponent } from '../post-command/post-command.component';

@Component({
	selector: 'app-post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
	@Input() post: Post;
	user: any;
	@Output() fetchData = new EventEmitter<boolean>();

	constructor(
		private rootService: RootService,
		private postService: PostService,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.rootService.currentUser.subscribe((res) => {
			this.user = res;
		});
	}

	showMoreVert(post: Post): boolean {
		return post.Author._id == this.user._id ? true : false;
	}

	isAdmin(): boolean {
		return this.user?.Roles.includes('Admin') ? true : false;
	}

	banPost(post: Post) {
		this.postService.banPost(post._id, { Status: 0 }).subscribe((res) => {
			this.fetchData.emit(true);
		});
	}

	deletePost(post: Post) {
		this.postService.deletePost(post._id).subscribe((res) => {
			this.fetchData.emit(true);
		});
	}

	editPost(post: Post) {
		this.dialog
			.open(PostCommandComponent, {
				width: '800px',
				data: post
			})
			.afterClosed()
			.subscribe((res) => {
				this.fetchData.emit(true);
			});
	}

	likeUnlikePost(post: Post) {
		if (post?.Likes?.includes(this.user._id)) {
			this.postService.unlikePost(post._id, { Likes: this.user._id }).subscribe((res) => {
				this.fetchData.emit(true);
			});
		} else {
			this.postService.likePost(post._id, { Likes: this.user._id }).subscribe((res) => {
				this.fetchData.emit(true);
			});
		}
	}

	unlikePost(post: Post) {
		this.postService.unlikePost(post._id, { Likes: this.user._id }).subscribe((res) => {
			this.fetchData.emit(true);
		});
	}

	isPostLiked(post: Post) {
		return post?.Likes?.includes(this.user._id) ? true : false;
	}
}
