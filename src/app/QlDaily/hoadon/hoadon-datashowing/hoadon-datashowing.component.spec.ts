import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonDatashowingComponent } from './hoadon-datashowing.component';

describe('HoaDonDatashowingComponent', () => {
  let component: HoaDonDatashowingComponent;
  let fixture: ComponentFixture<HoaDonDatashowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonDatashowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonDatashowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
