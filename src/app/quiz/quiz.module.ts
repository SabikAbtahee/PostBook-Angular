import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { MaterialModule } from '../shared/material.module';
const routes: Routes = [
	{
		path: '',
		component: QuizComponent
	}
];
@NgModule({
	declarations: [QuizComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule]
})
export class QuizModule {}
