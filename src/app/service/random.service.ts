import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  public rnd$ = new BehaviorSubject<number>(0);

  constructor() {
    window.setInterval(() => {
      this.rnd$.next(Math.ceil(Math.random() * 100));
    }, 2000);
  }
}
