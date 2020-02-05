import { Component, OnInit, NgZone, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flash-base',
  template: ''
})
export class FlashBaseComponent {
  constructor(private zone: NgZone, private el: ElementRef) {}
  flash() {
    if (!this.el.nativeElement) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      const target = this.el.nativeElement.querySelector('.box');
      target.classList.add('flash');
      window.setTimeout(() => {
        target.classList.remove('flash');
      }, 400);
    });
  }
}
