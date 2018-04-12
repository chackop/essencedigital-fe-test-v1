import { Injectable } from '@angular/core';
// import * as data from "../data/data.json";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
  private dataUrl = '../data/data.json';

  constructor(private _HttpClient: HttpClient) { }

  getData() {
    return this._HttpClient.get(this.dataUrl)
    .map((resp: Response)=> resp.json());
  }
}
