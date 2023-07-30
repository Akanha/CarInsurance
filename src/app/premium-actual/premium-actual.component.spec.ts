import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumActualComponent } from './premium-actual.component';

describe('PremiumActualComponent', () => {
  let component: PremiumActualComponent;
  let fixture: ComponentFixture<PremiumActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumActualComponent]
    });
    fixture = TestBed.createComponent(PremiumActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
