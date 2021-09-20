import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfAppointmentsComponent } from './prof-appointments.component';

describe('ProfAppointmentsComponent', () => {
  let component: ProfAppointmentsComponent;
  let fixture: ComponentFixture<ProfAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
