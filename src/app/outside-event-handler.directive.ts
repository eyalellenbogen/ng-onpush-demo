import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit,
  NgZone,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appOutsideEventHandler]'
})
export class OutsideEventHandlerDirective implements OnInit, OnDestroy {
  @Input()
  public event = 'click';

  @Output('appOutsideEventHandler')
  public emitter = new EventEmitter();

  private handler: EventListener | undefined;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.handler = ev => {
        this.emitter.emit();
      };
      this.el.nativeElement.addEventListener(this.event, this.handler, false);
    });
  }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener(this.event, this.handler!);
  }
}
