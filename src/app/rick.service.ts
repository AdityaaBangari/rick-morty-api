import { Injectable } from '@angular/core'
import {Observable, ObservedValuesFromArray} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndPoints} from "./app.constants";
@Injectable({
  providedIn: 'root'
})
export class RickService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(  private apiEndPoints: ApiEndPoints,
                private http: HttpClient) { }


  public getData(id: string): Observable<any> {
    return this.http.get(`${this.apiEndPoints.DATA.replace('{id}', id)}`, this.httpOptions);
  }
}



