import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPremiumComponent } from './login-premium.component';

describe('LoginPremiumComponent', () => {
  let component: LoginPremiumComponent;
  let fixture: ComponentFixture<LoginPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPremiumComponent]
    });
    fixture = TestBed.createComponent(LoginPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
