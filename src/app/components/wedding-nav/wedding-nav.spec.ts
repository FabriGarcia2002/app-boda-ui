import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingNav } from './wedding-nav';

describe('WeddingNav', () => {
  let component: WeddingNav;
  let fixture: ComponentFixture<WeddingNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
