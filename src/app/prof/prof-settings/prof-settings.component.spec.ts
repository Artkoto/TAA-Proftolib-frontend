import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSettingsComponent } from './prof-settings.component';

describe('ProfSettingsComponent', () => {
  let component: ProfSettingsComponent;
  let fixture: ComponentFixture<ProfSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
