import { TestBed, inject } from '@angular/core/testing';

import { ImgurCatsService } from './imgur-cats.service';

describe('ImgurCatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgurCatsService]
    });
  });

  it('should be created', inject([ImgurCatsService], (service: ImgurCatsService) => {
    expect(service).toBeTruthy();
  }));
});
