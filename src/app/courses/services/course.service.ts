import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
	constructor(private router: Router, private http: HttpClient) {}

	navigateToDetail(id: string) {
		this.router.navigate([`/courses/${id}`]);
	}

	navigateToQuiz() {
		this.router.navigate([`/quiz`]);
	}

	getCourses(): Observable<any> {
		return this.http.get(environment.Course, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	getCurrentCourse(id: string): Observable<any> {
		return this.http.get(`${environment.Course}/${id}`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			withCredentials: true,
			observe: 'response'
		});
	}

	completeChapter() {}
}
