import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-info-empresa',
  templateUrl: './info-empresa.component.html',
  styleUrls: ['./info-empresa.component.css'],
  providers: [DataService]
})
export class InfoEmpresaComponent implements OnInit {

  public user: any;
  constructor(
    public dataService: DataService
    ) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      result =>{
        this.user = result.response;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
