import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
@Injectable({
  providedIn: 'root'
})


@Injectable()
export class ConfigService {

  options:any =  {
    headers:   {'Accept': '*'},
    observe: 'body',
    params: {'':''},
    reportProgress: true,
    responseType: 'json',
    withCredentials: false,
  }


configUrl = 'assets/config.json';

getConfig() {
  return this.http.get<Config>(this.configUrl , this.options);
}

  constructor(private http: HttpClient) { }
}
