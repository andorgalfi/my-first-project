import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain: string = environment.baseUrl;
  statisticsData: string = this.domain + '/api/'

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.statisticsData, {headers});
  }
}
