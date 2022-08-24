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
	posts: Post[] = [
		{
			_id: '789db4ad-0bc2-4ed3-a7a5-8c90b54650ed',
			LastUpdateDate: '2022-08-24T16:23:47.289Z',
			Title: 'How to Develop an App',
			Description:
				'Hello Guys,\nToday I want to share with you how to create an angular app in 5 minutes.\nLol just kidding',
			Author: {
				_id: '0a3ead7f-6811-4b08-92c7-3ae924a20029',
				UserName: 'Sabik Admin'
			},
			Status: 1,
			Likes: ['0a3ead7f-6811-4b08-92c7-3ae924a20029']
		},
		{
			_id: '190e591a-fd0e-4834-adfc-5caef695c55f',
			LastUpdateDate: '2022-08-24T20:13:11.935Z',
			Title: 'My new life wer ',
			Description: 'I started making a project',
			Author: {
				_id: '0a3ead7f-6811-4b08-92c7-3ae924a20029',
				UserName: 'Sabik Admin'
			},
			Status: 1,
			Likes: []
		},
		{
			_id: 'e54fe7e2-d59d-4b98-82f6-c09034bea965',
			LastUpdateDate: '2022-08-24T20:13:23.545Z',
			Title: 'Testing two',
			Description: 'I started making a project asdfasdf',
			Author: {
				_id: '0a3ead7f-6811-4b08-92c7-3ae924a20029',
				UserName: 'Sabik Admin'
			},
			Status: 0,
			Likes: []
		},
		{
			_id: 'f8fb4824-15ff-4766-968e-b9df48fabee6',
			LastUpdateDate: '2022-08-24T20:13:39.868Z',
			Title: 'THIRD DAY',
			Description: 'New project test',
			Author: {
				_id: '0a3ead7f-6811-4b08-92c7-3ae924a20029',
				UserName: 'Sabik Admin'
			},
			Status: 0,
			Likes: []
		}
	];
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
