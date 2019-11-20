import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API} from '../../../apis';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _headers: HttpHeaders;
    private $http: HttpClient;

    constructor($http: HttpClient) {
        this.$http = $http;
    }

    private CreateHeaders() {
        this._headers = new HttpHeaders();
        this._headers = this._headers.append('Content-Type', 'application/json');
    }

    protected Post(path: string, data: any): Observable<any> {
        this.CreateHeaders();
        const url = `${API + path}`;

        return this.$http.post<any>(url, data, { headers: this._headers });
    }

    protected Get(path: string, query: any): Observable<any> {
        this.CreateHeaders();
        let url = `${API + path}`;
        if (query) {
            url += query;
        }

        return this.$http.get<any>(`${url}`, { headers: this._headers });
    }

    protected Put(path: string, data: any): Observable<any> {
        this.CreateHeaders();
        const url = `${API + path}`;

        return this.$http.put<any>(url, data, { headers: this._headers });
    }

    protected Delete(path: string): Observable<any> {
        this.CreateHeaders();
        const url = `${API + path}`;
        return this.$http.delete<any>(`${url}`, { headers: this._headers });
    }
}
