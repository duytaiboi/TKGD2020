import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimVeComponent } from './tim-ve.component';

describe('TimVeComponent', () => {
  let component: TimVeComponent;
  let fixture: ComponentFixture<TimVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
