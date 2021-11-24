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

import { HealthCheckResponse } from '../models/health-check-response';

@Injectable({
  providedIn: 'root',
})
export class MicroProfileHealthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation microprofileHealthRoot
   */
  static readonly MicroprofileHealthRootPath = '/health';

  /**
   * An aggregated view of the Liveness, Readiness and Startup of this application.
   *
   * Check the health of the application
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `microprofileHealthRoot()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthRoot$Response(params?: {
  }): Observable<StrictHttpResponse<HealthCheckResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MicroProfileHealthService.MicroprofileHealthRootPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HealthCheckResponse>;
      })
    );
  }

  /**
   * An aggregated view of the Liveness, Readiness and Startup of this application.
   *
   * Check the health of the application
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `microprofileHealthRoot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthRoot(params?: {
  }): Observable<HealthCheckResponse> {

    return this.microprofileHealthRoot$Response(params).pipe(
      map((r: StrictHttpResponse<HealthCheckResponse>) => r.body as HealthCheckResponse)
    );
  }

  /**
   * Path part for operation microprofileHealthLiveness
   */
  static readonly MicroprofileHealthLivenessPath = '/health/live';

  /**
   * The Liveness check of this application.
   *
   * Check the liveness of the application
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `microprofileHealthLiveness()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthLiveness$Response(params?: {
  }): Observable<StrictHttpResponse<HealthCheckResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MicroProfileHealthService.MicroprofileHealthLivenessPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HealthCheckResponse>;
      })
    );
  }

  /**
   * The Liveness check of this application.
   *
   * Check the liveness of the application
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `microprofileHealthLiveness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthLiveness(params?: {
  }): Observable<HealthCheckResponse> {

    return this.microprofileHealthLiveness$Response(params).pipe(
      map((r: StrictHttpResponse<HealthCheckResponse>) => r.body as HealthCheckResponse)
    );
  }

  /**
   * Path part for operation microprofileHealthReadiness
   */
  static readonly MicroprofileHealthReadinessPath = '/health/ready';

  /**
   * The Readiness check of this application.
   *
   * Check the readiness of the application
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `microprofileHealthReadiness()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthReadiness$Response(params?: {
  }): Observable<StrictHttpResponse<HealthCheckResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MicroProfileHealthService.MicroprofileHealthReadinessPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HealthCheckResponse>;
      })
    );
  }

  /**
   * The Readiness check of this application.
   *
   * Check the readiness of the application
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `microprofileHealthReadiness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthReadiness(params?: {
  }): Observable<HealthCheckResponse> {

    return this.microprofileHealthReadiness$Response(params).pipe(
      map((r: StrictHttpResponse<HealthCheckResponse>) => r.body as HealthCheckResponse)
    );
  }

  /**
   * Path part for operation microprofileHealthStartup
   */
  static readonly MicroprofileHealthStartupPath = '/health/startup';

  /**
   * The Startup check of this application.
   *
   * Check the startup of the application
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `microprofileHealthStartup()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthStartup$Response(params?: {
  }): Observable<StrictHttpResponse<HealthCheckResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MicroProfileHealthService.MicroprofileHealthStartupPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HealthCheckResponse>;
      })
    );
  }

  /**
   * The Startup check of this application.
   *
   * Check the startup of the application
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `microprofileHealthStartup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  microprofileHealthStartup(params?: {
  }): Observable<HealthCheckResponse> {

    return this.microprofileHealthStartup$Response(params).pipe(
      map((r: StrictHttpResponse<HealthCheckResponse>) => r.body as HealthCheckResponse)
    );
  }

}
