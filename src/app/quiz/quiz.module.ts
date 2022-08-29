import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: QuizComponent
	}
];
@NgModule({
	declarations: [QuizComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class QuizModule {}
