import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSlotsComponent } from './prof-slots.component';

describe('ProfSlotsComponent', () => {
  let component: ProfSlotsComponent;
  let fixture: ComponentFixture<ProfSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
