import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import { FlashBaseComponent } from 'src/app/flash-base/flash-base.component';

@Component({
  selector: 'app-array-sorter',
  templateUrl: './array-sorter.component.html',
  styleUrls: ['./array-sorter.component.scss'],
})
export class ArraySorterComponent extends FlashBaseComponent {
  @Input()
  public arr: number[] = [];

  get sortedArray() {
    const sortedArr = [...this.arr];
    function isSorted(arr: number[]) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
          return false;
        }
      }
      return true;
    }

    function shuffle(arr: number[]) {
      let curIdx = arr.length;

      while (0 !== curIdx) {
        const rnd = Math.floor(Math.random() * curIdx);
        curIdx -= 1;
        const tmp = arr[curIdx];
        arr[curIdx] = arr[rnd];
        arr[rnd] = tmp;
      }

      return arr;
    }

    while (!isSorted(sortedArr)) {
      shuffle(sortedArr);
    }

    return sortedArr;
  }

  constructor(el: ElementRef<HTMLElement>, zone: NgZone) {
    super(zone, el);
  }
}
