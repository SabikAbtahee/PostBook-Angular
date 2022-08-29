import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
	Courses: Course[];
	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		this.getCourses();
	}

	getCourses() {
		this.courseService
			.getCourses()
			.pipe(
				first(),
				map((res) => {
					if (res?.body) return res.body;
					return null;
				})
			)
			.subscribe((res: Course[]) => {
				this.Courses = res;
			});
	}
}
