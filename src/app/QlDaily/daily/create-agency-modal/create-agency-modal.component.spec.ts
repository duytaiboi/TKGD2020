import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgencyModalComponent } from './create-agency-modal.component';

describe('CreateAgencyModalComponent', () => {
  let component: CreateAgencyModalComponent;
  let fixture: ComponentFixture<CreateAgencyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgencyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgencyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
