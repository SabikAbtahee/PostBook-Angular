import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post, Status, StatusConst } from '@shared';
import { Subject } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
	selector: 'app-post-command',
	templateUrl: './post-command.component.html',
	styleUrls: ['./post-command.component.scss']
})
export class PostCommandComponent implements OnInit {
	postForm: FormGroup;
	isLoading: boolean;
	_unsubscribeAll: Subject<any>;
	status = StatusConst;
	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<PostCommandComponent>,
		private postService: PostService,
		@Inject(MAT_DIALOG_DATA) public data: Post
	) {
		this._unsubscribeAll = new Subject();
	}

	ngOnInit(): void {
		this.initForm(this.data);
	}

	ngOnDestroy() {
		this._unsubscribeAll.next(true);
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}

	initForm(data?: Post) {
		this.postForm = this.fb.group({
			Title: [data?.Title, [Validators.required]],
			Description: [data?.Description, [Validators.required]],
			Status: [data?.Status, [Validators.required]]
		});
	}

	submit() {
		if (this.postForm.valid) {
			if (this.data) {
				this.postService.updatePost(this.data._id, this.postForm.value).subscribe((res) => {
					console.log(res);
				});
			} else {
				this.postService.createPost(this.postForm.value).subscribe((res) => {
					console.log(res);
				});
			}

			this.closeDialog();
		}
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
