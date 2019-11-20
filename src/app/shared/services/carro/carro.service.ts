import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '../base/base.service';
import { ServiceResponse } from '../../models/service-response';
import { ServiceResult } from '../../models/service-result';
import { Carro } from '../../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService extends BaseService {

  constructor($http: HttpClient) {
    super($http);
  }

  public get(): Observable<ServiceResponse<Carro>> {
    return super.Get(`/api/carro`, null);
  }

  public post(model: Carro): Observable<ServiceResponse<ServiceResult>> {
    return super.Post(`/api/carro`, model);
  }

  public put(model: Carro): Observable<ServiceResult> {
    return super.Put(`/api/carro`, model);
  }

}
