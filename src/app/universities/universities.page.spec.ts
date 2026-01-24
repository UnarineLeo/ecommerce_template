import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Universities } from './universities.page';

describe('Universities', () => {
  let component: Universities;
  let fixture: ComponentFixture<Universities>;
  beforeEach(async () => {
    fixture = TestBed.createComponent(Universities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
