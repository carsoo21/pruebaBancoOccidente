import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  constructor(
    private http: HttpClient
  ) {

  }
  getEmpresas(url: string){
    return this.http.get(url, { responseType: 'text' });
  }
}
