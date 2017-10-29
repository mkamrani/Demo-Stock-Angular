import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

const API_URL = ''; // Normally this comes from a config file

@Injectable()
export class JsonApiService {

  constructor(private _http: Http) { }

  getAll(url: string): Observable<any> {
    return this._http.get(url)
      .delay(100)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get(url: string) {

  }

  delete(url: string) {

  }
  put(url: string, body: any) {

  }
  post(url: string, body: any) {

  }
  private extractData(res: Response) {
    const body = res.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
