import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customepipes } from './customepipes';

describe('Customepipes', () => {
  let component: Customepipes;
  let fixture: ComponentFixture<Customepipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customepipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customepipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
