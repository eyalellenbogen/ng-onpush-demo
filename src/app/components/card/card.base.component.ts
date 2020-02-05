import { ICard } from '../../interfaces';
import { Input, DoCheck, ElementRef, NgZone } from '@angular/core';
import { RandomService } from '../../service/random.service';
import { FlashBaseComponent } from 'src/app/flash-base/flash-base.component';

export abstract class CardBaseComponent extends FlashBaseComponent
  implements DoCheck {
  @Input()
  public card: ICard;

  public rndValue: number;

  public get rnd$() {
    return this.random.rnd$;
  }

  increment() {
    this.card.counter++;
  }

  decrement() {
    this.card.counter--;
  }

  constructor(
    private random: RandomService,
    el: ElementRef<HTMLElement>,
    zone: NgZone
  ) {
    super(zone, el);
    this.random.rnd$.subscribe(x => (this.rndValue = x));
  }

  ngDoCheck() {}
}
