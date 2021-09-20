import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSignupComponent } from './prof-signup.component';

describe('ProfSignupComponent', () => {
  let component: ProfSignupComponent;
  let fixture: ComponentFixture<ProfSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
