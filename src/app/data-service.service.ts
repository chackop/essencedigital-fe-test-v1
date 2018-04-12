import { Injectable } from '@angular/core';
// import * as data from "../assets/data/data.json";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceService {
  private dataUrl = '../assets/data/data.json';

  constructor(private _HttpClient: HttpClient) { }

  getData(): Observable<any> {
    return this._HttpClient.get(this.dataUrl);
      // .map((resp: Response) => {
      //   console.log(resp.json);
      // });
  }
}
