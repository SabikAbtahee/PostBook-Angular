import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseService } from './services/course.service';

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent
	},
	{
		path: ':id',
		component: CourseDetailComponent
	}
];

@NgModule({
	declarations: [CoursesComponent, CourseCardComponent, CourseDetailComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
	providers: [CourseService]
})
export class CoursesModule {}
