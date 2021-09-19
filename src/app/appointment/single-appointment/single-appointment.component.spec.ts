import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppointmentComponent } from './single-appointment.component';

describe('SingleAppointmentComponent', () => {
  let component: SingleAppointmentComponent;
  let fixture: ComponentFixture<SingleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
