import { Injectable } from '@angular/core'
import {Observable, ObservedValuesFromArray} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiEndPoints} from "./app.constants";
@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(  private apiEndPoints: ApiEndPoints,
                private http: HttpClient) { }


  public getData(id: string): Observable<any> {
    return this.http.get(`${this.apiEndPoints.DATA.replace('{id}', id)}`)
  }
}



