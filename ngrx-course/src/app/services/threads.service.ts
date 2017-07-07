import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AllUserData} from "../../../shared/to/a--user-data";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads')
      .map(res => res.json());
  }
}
