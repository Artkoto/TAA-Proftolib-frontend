import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfViewComponent } from './prof-view.component';

describe('ProfViewComponent', () => {
  let component: ProfViewComponent;
  let fixture: ComponentFixture<ProfViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
