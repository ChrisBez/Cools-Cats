import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { WebService } from './web.service';

describe('WebService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let webService: WebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [WebService]
    });

    injector =getTestBed();
    httpMock = injector.get(HttpTestingController);
    webService = injector.get(WebService);

  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getPhoto', () => {
    const dummyTag: string = 'test';
    const dummyData: any = [
      { url: 'url1',
        album: 'album1' },
      { url: 'url2',
        album: 'album2'}
    ];

      it('should return an Observable<any>', () => {
      webService.getPhoto(dummyTag).subscribe(json => {
         expect(json.length).toBe(2);
         expect(json).toEqual(dummyData); 
      });

      const req = httpMock.expectOne(`${webService.api_url}test`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyData);
    });

    it('should be OK returning no data', () => {

      webService.getPhoto(dummyTag).subscribe(
        json => expect(json.length).toEqual(0, 'should have an empty array'),
        fail
      );

      const req = httpMock.expectOne(`${webService.api_url}test`);
      req.flush([]);
    });

    it('should return expected json (called multiple times)', () => {

      webService.getPhoto(dummyTag).subscribe();
      webService.getPhoto(dummyTag).subscribe();
      webService.getPhoto(dummyTag).subscribe(
        json => expect(json).toEqual(dummyData, 'should return expected json'),
        fail
      );

      const req = httpMock.match(`${webService.api_url}test`);
      expect(req.length).toEqual(3, 'calls to getPhoto()');

      // Respond to each request with different mock hero results
      req[0].flush([]);
      req[1].flush([{id: 1, name: 'bob'}]);
      req[2].flush(dummyData);
    });

    it('should return placeholder image Url if error is caught', () => {

      webService.getPhoto(dummyTag).subscribe(json => {
        expect(json).toEqual(webService.placeholder); 
      });

      const req = httpMock.expectOne(`${webService.api_url}test`);
      req.flush({ errorMessage: 'Error here' }, { status: 500, statusText: 'Server Error'} );
      });
    });

  });

