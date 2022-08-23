import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent
	}
];

@NgModule({
	declarations: [CoursesComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule]
})
export class CoursesModule {}
