import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClientComponent } from './single-client.component';

describe('SingleClientComponent', () => {
  let component: SingleClientComponent;
  let fixture: ComponentFixture<SingleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
