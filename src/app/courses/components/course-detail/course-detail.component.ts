import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs';
import { Chapter, Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course.service';

@Component({
	selector: 'app-course-detail',
	templateUrl: './course-detail.component.html',
	styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
	currentCourse: Course;
	currentChapter: Chapter;

	constructor(
		private _sanitizer: DomSanitizer,
		private route: ActivatedRoute,
		private courseService: CourseService
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		this.getCurrentCourse(id);
	}

	getCurrentCourse(id: string) {
		this.courseService
			.getCurrentCourse(id)
			.pipe(
				first(),
				map((res) => {
					if (res?.body) return res.body;
					return null;
				})
			)
			.subscribe((res: Course) => {
				this.currentCourse = res;
				this.setCourse();
			});
	}

	setCourse() {
		this.currentCourse.Chapters = this.currentCourse.Chapters.map((res) => {
			return {
				...res,
				VideoSourceLink: this._sanitizer.bypassSecurityTrustResourceUrl(res.VideoSourceLink)
			};
		});
		this.changeChapter(this.currentCourse.Chapters[0]);
	}

	changeChapter(chapter: Chapter) {
		if (this.currentChapter) this.completeChapter(this.currentChapter);
		this.currentChapter = chapter;
	}

	completeChapter(chapter: Chapter) {
		this.currentCourse.Chapters.filter((res) => res.Title == chapter.Title).map(
			(res) => (res.IsComplete = true)
		);
	}
}
