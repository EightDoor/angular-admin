import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Config from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:HttpClient) {
  }

  get(url: string): Observable<Object> {
    return this.http.get(Config.baseUrl + url);
  }
  post(url: string, body?: any): Observable<Object> {
    return this.http.post(Config.baseUrl + url, body);
  }
}
