import {
  Component,
  OnInit,
  Input,
  ElementRef,
  NgZone,
  ChangeDetectionStrategy,
  DoCheck,
  ChangeDetectorRef
} from '@angular/core';
import { IUser } from '../../interfaces';
import { FlashBaseComponent } from '../../flash-base/flash-base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent extends FlashBaseComponent
  implements DoCheck, OnInit {
  @Input()
  public user: IUser;

  private oldUserName: string;

  constructor(
    private cdr: ChangeDetectorRef,
    el: ElementRef<HTMLElement>,
    zone: NgZone
  ) {
    super(zone, el);
  }

  ngOnInit() {
    this.oldUserName = this.user && this.user.name;
  }

  ngDoCheck() {
    if (this.oldUserName === this.user.name) {
      return;
    }
    this.oldUserName = this.user.name;
    this.cdr.markForCheck();
  }
}
