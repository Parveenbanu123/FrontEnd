import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empinfo } from './empinfo';

describe('Empinfo', () => {
  let component: Empinfo;
  let fixture: ComponentFixture<Empinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
