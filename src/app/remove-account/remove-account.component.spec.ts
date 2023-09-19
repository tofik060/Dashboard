import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAccountComponent } from './remove-account.component';

describe('RemoveAccountComponent', () => {
  let component: RemoveAccountComponent;
  let fixture: ComponentFixture<RemoveAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveAccountComponent]
    });
    fixture = TestBed.createComponent(RemoveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
