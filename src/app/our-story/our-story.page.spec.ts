import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryPage } from './our-story.page';

describe('OurStoryPage', () => {
  let component: OurStoryPage;
  let fixture: ComponentFixture<OurStoryPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(OurStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
