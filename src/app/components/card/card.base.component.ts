import { ICard } from '../../interfaces';
import { Input, DoCheck, ElementRef, NgZone, Component } from '@angular/core';
import { RandomService } from '../../service/random.service';
import { FlashBaseComponent } from 'src/app/flash-base/flash-base.component';

@Component({
  template: '',
})
export abstract class CardBaseComponent
  extends FlashBaseComponent
  implements DoCheck
{
  @Input()
  public card: ICard = {} as ICard;

  public abstract rndValue: number | undefined;

  public get rnd$() {
    return this.random.rnd$;
  }

  increment() {
    this.card!.counter++;
  }

  decrement() {
    this.card!.counter--;
  }

  constructor(
    private random: RandomService,
    el: ElementRef<HTMLElement>,
    zone: NgZone
  ) {
    super(zone, el);
    this.random.rnd$.subscribe((x) => (this.rndValue = x));
  }

  ngDoCheck() {}
}
