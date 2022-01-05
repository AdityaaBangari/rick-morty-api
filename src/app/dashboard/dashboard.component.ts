import { Component, OnInit } from '@angular/core';
import {RickService} from "../rick.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private  rickService: RickService) { }

  ngOnInit(): void {
  }
  getData(){
this.rickService.getData('5').subscribe(res => {
  const response = res;
  console.log(response);
})
  }
}
