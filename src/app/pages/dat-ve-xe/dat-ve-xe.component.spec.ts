import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeXeComponent } from './dat-ve-xe.component';

describe('DatVeXeComponent', () => {
  let component: DatVeXeComponent;
  let fixture: ComponentFixture<DatVeXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
