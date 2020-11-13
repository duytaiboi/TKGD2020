import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDatashowingComponent } from './daily-datashowing.component';

describe('DailyDatashowingComponent', () => {
  let component: DailyDatashowingComponent;
  let fixture: ComponentFixture<DailyDatashowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDatashowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDatashowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
