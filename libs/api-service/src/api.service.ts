import { HttpService, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiServiceError } from './api-service-error';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return this.httpService
      .get(url, {
        headers: this.getDefaultHeaders(),
        ...config,
      })
      .pipe(
        catchError((e) => {
          return throwError(new ApiServiceError(e));
        }),
      );
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return this.httpService
      .post(url, data, {
        headers: this.getDefaultHeaders(),
        ...config,
      })
      .pipe(
        catchError((e) => {
          return throwError(new ApiServiceError(e));
        }),
      );
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<T>> {
    return this.httpService
      .patch(url, data, {
        headers: this.getDefaultHeaders(),
        ...config,
      })
      .pipe(
        catchError((e) => {
          return throwError(new ApiServiceError(e));
        }),
      );
  }

  private getDefaultHeaders() {
    return {
      authorization: '',
    };
  }
}
