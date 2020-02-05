import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySorterComponent } from './array-sorter.component';

describe('ArraySorterComponent', () => {
  let component: ArraySorterComponent;
  let fixture: ComponentFixture<ArraySorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraySorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
