import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  BASE_URL = 'http://localhost:8080/api';

  options:any =  {
    observe: 'body',
    reportProgress: true,
    responseType: 'json',
    withCredentials: false,
  }


  constructor(private http: HttpClient){
  }

  accounts(url:any) : Observable<any> {
    console.log(this.BASE_URL + '/' + url);
    return this.http.get(this.BASE_URL + '/' + url , this.options);
  }
  account(url:any) : Observable<any> {
    console.log(this.BASE_URL + '/' + url);
    return this.http.get(this.BASE_URL + '/' + url , this.options);
  }
}

