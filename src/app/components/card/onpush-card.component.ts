import {
  Component,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CardBaseComponent } from './card.base.component';
import { RandomService } from '../../service/random.service';

@Component({
  selector: 'app-onpush-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushCardComponent extends CardBaseComponent {
  private _rndValue = 0;
  override set rndValue(value: number) {
    this._rndValue = value;
    // if (this.cdr) {
    //   this.cdr.markForCheck();
    // }
  }

  override get rndValue() {
    return this._rndValue;
  }

  constructor(
    random: RandomService,
    el: ElementRef<HTMLElement>,
    zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    super(random, el, zone);
  }
}
