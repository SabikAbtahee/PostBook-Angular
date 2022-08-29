import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course.service';

@Component({
	selector: 'app-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
	course: Course;
	@Input() set courseInput(value: Course) {
		this.course = value;
	}
	constructor(private courseService: CourseService) {}

	ngOnInit(): void {}

	goToCourseDetail(id: string) {
		this.courseService.navigateToDetail(id);
	}

	gotoQuiz() {
		this.courseService.navigateToQuiz();
	}
}
