import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  data:any={};
  cargada=false;
  constructor(
    private http: HttpClient
  ) {

  }
  getEmpresas(url: string){
    return this.http.get(url, { responseType: 'text' });
  }
}
