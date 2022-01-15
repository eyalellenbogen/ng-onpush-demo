import {
  Component,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CardBaseComponent } from './card.base.component';
import { RandomService } from '../../service/random.service';

@Component({
  selector: 'app-default-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultCardComponent extends CardBaseComponent {
  public rndValue: number | undefined;

  constructor(
    random: RandomService,
    el: ElementRef<HTMLElement>,
    zone: NgZone
  ) {
    super(random, el, zone);
  }
}
