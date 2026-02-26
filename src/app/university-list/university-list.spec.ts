import { TestBed } from '@angular/core/testing';

import { UniversityList } from './university-list';

describe('UniversityList', () => {
  let service: UniversityList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
