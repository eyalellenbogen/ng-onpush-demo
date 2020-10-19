import { Component, OnInit, NgZone } from '@angular/core';
const initialArray = [1, 3, 2, 4, 5, 6, 7, 8];

function Bogosort(arr: number[]) {
  function isSorted(targetArray: number[]) {
    for (let i = 1; i < targetArray.length; i++) {
      if (targetArray[i - 1] > targetArray[i]) {
        return false;
      }
    }
    return true;
  }

  function shuffle(targetArray: number[]) {
    let count = targetArray.length;
    let temp: number;
    let index: number;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = targetArray[count];
      targetArray[count] = targetArray[index];
      targetArray[index] = temp;
    }

    return targetArray;
  }

  function sort(targetArray: number[]) {
    let sorted = false;
    while (!sorted) {
      targetArray = shuffle(targetArray);
      sorted = isSorted(targetArray);
    }
    return targetArray;
  }

  return sort(arr);
}

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  public arrays = [initialArray, initialArray, initialArray];
  constructor(private zone: NgZone) {}

  ngOnInit() {
    // -------------- INSTRUCTIONS --------------------
    // Bogossort() is a very non-performant sorting algorithm.
    // To make it hurt the CPU add elements to `initialArray`.
    // On an i7 machine I could feel the browser suffering with 8 elements.
    // The components on the screen will light up every time a change detection is occuring.

    // To reduce the amount of calls to this function we can remove `mousemove` from
    // the Angular Zone by using `ngZone.runOuutsideAngular()`.

    // ----------- comment in and out to see difference -------------
    // this.zone.runOutsideAngular(() => {
    window.document.addEventListener('mousemove', (ev: MouseEvent) => {
      Bogosort(initialArray);
    });
    // });
  }
}
