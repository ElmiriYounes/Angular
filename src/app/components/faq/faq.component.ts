import { Component } from '@angular/core';
import { questions } from 'src/constants/faq';
import { IQuestion } from 'src/interfaces/faq.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  // 6 questions per container
  blocs: number = Math.ceil(questions.length / 6);
  questionsPerBloc: IQuestion[][] = [];
  isClicked: boolean[][] = [];

  ngOnInit() {
    for (let i = 0; i < this.blocs; i++) {
      const start = i * 6;
      const end = start + 6;
      this.questionsPerBloc.push(questions.slice(start, end));
      this.isClicked.push(
        new Array(questions.slice(start, end).length).fill(false)
      );
    }
  }

  toggleClick(i: number, j: number) {
    // put all previous question opened at false, if it's not the same question clicked twice
    if (!this.isClicked[i][j]) {
      this.questionsPerBloc.map((questions: IQuestion[], index1: number) => {
        questions.map((question: IQuestion, index2: number) => {
          this.isClicked[index1][index2] &&
            (this.isClicked[index1][index2] = false);
        });
      });
    }

    this.isClicked[i][j] = !this.isClicked[i][j];
  }
}
