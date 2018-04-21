import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ApiService {
  constructor(private http: Http) {

  }
  createUser(requestParams) {
    let req = this.http.post(`users/register`, requestParams);
    return this.mapAndCatch(req);
  }
  mapAndCatch(req) {
    return req.map((res: Response) => {
      return res.json();
    }).catch((error) => {
      let errMsg;
      try {
        errMsg = error.json().error || 'Server error';
      } catch {
        errMsg = error._body;
      }
      return Observable.throw(errMsg);
    })

  }
}
