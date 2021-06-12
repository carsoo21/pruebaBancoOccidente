import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {
  public user: any;
  constructor(public dataService: DataService) { }

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
