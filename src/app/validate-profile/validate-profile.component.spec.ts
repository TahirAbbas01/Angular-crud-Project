import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateProfileComponent } from './validate-profile.component';

describe('ValidateProfileComponent', () => {
  let component: ValidateProfileComponent;
  let fixture: ComponentFixture<ValidateProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateProfileComponent]
    });
    fixture = TestBed.createComponent(ValidateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
