import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormModal } from './guest-form-modal';

describe('GuestFormModal', () => {
  let component: GuestFormModal;
  let fixture: ComponentFixture<GuestFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestFormModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
