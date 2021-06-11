import { Component } from '@angular/core';
import { EmpresasService } from './service/empresas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-bo';

  constructor(
    public json:EmpresasService
  ){
    this.json.getEmpresas('https://9wu950np7c.execute-api.sa-east-1.amazonaws.com/pruebaBO/800220154').subscribe((res: any) => {
      console.log(res);
    })
  }
}
