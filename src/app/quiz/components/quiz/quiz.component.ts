import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	gotoQuiz() {
		window.open('https://postbookbackend.web.app/assets/quiz/quiz.html');
	}
}
