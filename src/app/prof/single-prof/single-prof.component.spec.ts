import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfComponent } from './single-prof.component';

describe('SingleProfComponent', () => {
  let component: SingleProfComponent;
  let fixture: ComponentFixture<SingleProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
