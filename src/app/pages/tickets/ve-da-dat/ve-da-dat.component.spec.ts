import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeDaDatComponent } from './ve-da-dat.component';

describe('VeDaDatComponent', () => {
  let component: VeDaDatComponent;
  let fixture: ComponentFixture<VeDaDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeDaDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeDaDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
