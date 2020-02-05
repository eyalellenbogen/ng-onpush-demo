import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent {
  private originalArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  public cards: ICard[] = [
    {
      counter: 1,
      cards: [
        {
          counter: 1,
          cards: [
            { counter: 1, arr: this.originalArray },
            { counter: 1, arr: this.originalArray }
          ],
          arr: this.originalArray
        },
        {
          counter: 1,
          cards: [
            { counter: 1, arr: this.originalArray },
            { counter: 1, arr: this.originalArray }
          ],
          arr: this.originalArray
        }
      ],
      arr: this.originalArray
    }
  ];

  public randomize() {
    this.originalArray = [
      ...this.originalArray.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    ];
  }
}
