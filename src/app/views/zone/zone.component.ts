import { Component, OnInit, NgZone } from '@angular/core';
const initialArray = [1, 3, 2, 4, 5, 6, 7, 8];
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  public arrays = [initialArray, initialArray, initialArray];
  constructor(private zone: NgZone) {}

  ngOnInit() {
    // comment `this.zone.runOutsideAngular()` in and out to see the difference
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', (ev: MouseEvent) => {
        // now the event is registered with our zone
      });
    });
  }
}
