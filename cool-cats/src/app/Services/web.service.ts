import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Unsplash from './../../../node_modules/unsplash-js';

import { secrets } from '../secrets';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  Unsplash: any = require('unsplash-js').default;

  mySecrets: any;

  unsplash: Unsplash;

  constructor(private http: HttpClient) {

    this.mySecrets = new secrets;

    //As per unsplash documentation: https://github.com/unsplash/unsplash-js
    this.unsplash = new Unsplash({
      applicationId: this.mySecrets.access,
      secret: this.mySecrets.secret,
      callbackUrl: this.mySecrets.redirect
    });
   }

   //supply a tag and get a photo url. e.g: 'cat' or 'chair'
   getPhoto(tag: string) {
    this.unsplash.photos.getRandomPhoto({ query: tag ,username: this.mySecrets.username })
    .then(Unsplash.toJson)
    .then(json => {
     return json.urls.regular
    });
   }

}
