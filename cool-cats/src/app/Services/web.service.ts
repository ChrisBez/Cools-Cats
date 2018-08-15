import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { secrets } from '../secrets';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  private mySecrets: any;
  readonly api_url = `https://api.unsplash.com/photos/random?query=`;

  readonly placeholder = {'urls': { 'regular': '..\\assets\\GoodCat.JPG'}};

  constructor(private http: HttpClient) {

    this.mySecrets = new secrets;

  }

  //supply a tag and get a photo url. e.g: 'cat' or 'chair'
  getPhoto(tag: string): Observable<any> {
  
    const authHeader = {
      headers: new HttpHeaders({
        'Authorization': `Client-ID ${this.mySecrets.access}`
      })
    }

    //Todo: Add typing to Json
    return this.http.get<any>(this.api_url.concat(tag), authHeader)
      .pipe(
        //return placeholder Url to local asset if API breaks 
        catchError(this.handleError<any>('getPhoto', 'get', this.placeholder))
      );
  }

  /**
  *Taken from Angular documentation
  * Returns a function that handles Http operation failures.
  * This error handler lets the app continue to run as if no error occurred.
  * @param serviceName = name of the data service that attempted the operation
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }

}
