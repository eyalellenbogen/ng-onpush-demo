import { Component, OnInit, NgZone } from '@angular/core';
const arr = [1, 3, 2, 4, 5, 6, 7];
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  public arrays = [arr, arr, arr];
  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', (ev: MouseEvent) => {
        // do some work;
      });
    });
  }
}
