/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateWalletDto } from '../models/create-wallet-dto';
import { Credentials } from '../models/credentials';
import { DeployContractDto } from '../models/deploy-contract-dto';
import { EthSendTransaction } from '../models/eth-send-transaction';
import { GetWalletAddressDto } from '../models/get-wallet-address-dto';
import { TransferDto } from '../models/transfer-dto';
import { WalletDto } from '../models/wallet-dto';

@Injectable({
  providedIn: 'root',
})
export class EthereumControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountAddressGet
   */
  static readonly ApiAccountAddressGetPath = '/api/account/{address}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAddressGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAddressGet$Response(params: {
    address: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiAccountAddressGetPath, 'get');
    if (params) {
      rb.path('address', params.address, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountAddressGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAddressGet(params: {
    address: string;
  }): Observable<void> {

    return this.apiAccountAddressGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountsGet
   */
  static readonly ApiAccountsGetPath = '/api/accounts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiAccountsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet(params?: {
  }): Observable<void> {

    return this.apiAccountsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiContractsDeploySoccerManagerPost
   */
  static readonly ApiContractsDeploySoccerManagerPostPath = '/api/contracts/deploy/soccerManager';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractsDeploySoccerManagerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiContractsDeploySoccerManagerPost$Response(params?: {
    body?: DeployContractDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiContractsDeploySoccerManagerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractsDeploySoccerManagerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiContractsDeploySoccerManagerPost(params?: {
    body?: DeployContractDto
  }): Observable<string> {

    return this.apiContractsDeploySoccerManagerPost$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiWalletsCreatePost
   */
  static readonly ApiWalletsCreatePostPath = '/api/wallets/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletsCreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsCreatePost$Response(params?: {
    body?: CreateWalletDto
  }): Observable<StrictHttpResponse<WalletDto>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiWalletsCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WalletDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWalletsCreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsCreatePost(params?: {
    body?: CreateWalletDto
  }): Observable<WalletDto> {

    return this.apiWalletsCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<WalletDto>) => r.body as WalletDto)
    );
  }

  /**
   * Path part for operation apiWalletsGetPost
   */
  static readonly ApiWalletsGetPostPath = '/api/wallets/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletsGetPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsGetPost$Response(params?: {
    body?: GetWalletAddressDto
  }): Observable<StrictHttpResponse<Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiWalletsGetPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Credentials>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWalletsGetPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsGetPost(params?: {
    body?: GetWalletAddressDto
  }): Observable<Credentials> {

    return this.apiWalletsGetPost$Response(params).pipe(
      map((r: StrictHttpResponse<Credentials>) => r.body as Credentials)
    );
  }

  /**
   * Path part for operation apiWalletsTransferPost
   */
  static readonly ApiWalletsTransferPostPath = '/api/wallets/transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletsTransferPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsTransferPost$Response(params?: {
    body?: TransferDto
  }): Observable<StrictHttpResponse<EthSendTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiWalletsTransferPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EthSendTransaction>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWalletsTransferPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiWalletsTransferPost(params?: {
    body?: TransferDto
  }): Observable<EthSendTransaction> {

    return this.apiWalletsTransferPost$Response(params).pipe(
      map((r: StrictHttpResponse<EthSendTransaction>) => r.body as EthSendTransaction)
    );
  }

  /**
   * Path part for operation apiWalletsAddressBalanceGet
   */
  static readonly ApiWalletsAddressBalanceGetPath = '/api/wallets/{address}/balance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletsAddressBalanceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletsAddressBalanceGet$Response(params: {
    address: string;
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EthereumControllerService.ApiWalletsAddressBalanceGetPath, 'get');
    if (params) {
      rb.path('address', params.address, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWalletsAddressBalanceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletsAddressBalanceGet(params: {
    address: string;
  }): Observable<number> {

    return this.apiWalletsAddressBalanceGet$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
