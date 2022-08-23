import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}

	getPosts(): Observable<any> {
		return this.http.get(environment.Post, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	createPost(createPostDto: any): Observable<any> {
		return this.http.post(environment.Post, createPostDto, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	updatePost(id: string, updatePostDto: any): Observable<any> {
		return this.http.patch(`${environment.Post}/${id}`, updatePostDto, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	banPost(id: string, banPostDto: any): Observable<any> {
		return this.http.patch(`${environment.Post}/ban/${id}`, banPostDto, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	likePost(id: string, likePostDto: any): Observable<any> {
		return this.http.patch(`${environment.Post}/like/${id}`, likePostDto, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	unlikePost(id: string, likePostDto: any): Observable<any> {
		return this.http.patch(`${environment.Post}/unlike/${id}`, likePostDto, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	deletePost(id: string): Observable<any> {
		return this.http.delete(`${environment.Post}/${id}`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}
}
