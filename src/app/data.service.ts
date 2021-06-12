import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url: string;
  constructor(public _http: HttpClient ) {

    this.url = "https://lse3cbcrt3.execute-api.sa-east-1.amazonaws.com/dataCliente/800220154";
  }

  getData(): Observable<any>{
    return this._http.get(this.url)
  }
}
