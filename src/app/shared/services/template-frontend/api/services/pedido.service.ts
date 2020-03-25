/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Pedido } from '../models/pedido';

/**
 * Grupo de APIs de Pedidos.
 */
@Injectable({
  providedIn: 'root',
})
class PedidoService extends __BaseService {
  static readonly createOrderPath = '/order';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param pedidoRessource Objeto do pedido
   */
  createOrderResponse(pedidoRessource: Pedido): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = pedidoRessource;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param pedidoRessource Objeto do pedido
   */
  createOrder(pedidoRessource: Pedido): __Observable<null> {
    return this.createOrderResponse(pedidoRessource).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PedidoService {
}

export { PedidoService }
