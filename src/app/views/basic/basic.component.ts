import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces';

const names = [
  'Peter Parker',
  'Bruce Banner',
  'Tony Stark',
  'Natasha Romanova',
  'Steve Rogers',
  'Jessica Jones',
  'Gwen Stacey',
  'Pepper Potts',
  'Clint Barton'
];

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  public user: IUser = { name: names[0] };

  public switch() {
    const randomIndex = Math.floor(Math.random() * names.length);
    this.user.name = names[randomIndex];
  }
}
