import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAuthComponent } from './client-auth.component';

describe('ClientAuthComponent', () => {
  let component: ClientAuthComponent;
  let fixture: ComponentFixture<ClientAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
