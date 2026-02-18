import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDay } from './big-day';

describe('BigDay', () => {
  let component: BigDay;
  let fixture: ComponentFixture<BigDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
