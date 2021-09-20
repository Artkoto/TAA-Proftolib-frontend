import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfAuthComponent } from './prof-auth.component';

describe('ProfAuthComponent', () => {
  let component: ProfAuthComponent;
  let fixture: ComponentFixture<ProfAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
