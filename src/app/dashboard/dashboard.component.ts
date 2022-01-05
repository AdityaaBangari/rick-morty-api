import { Component, OnInit } from '@angular/core';
import {RickService} from "../rick.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  gotData= false;
  response: any;
  input: any;
  characters:any = [];
  constructor( private  rickService: RickService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    for (let input = 1; input <= 50; input++) {
      console.log(input);
      this.input = input
      this.rickService.getData(this.input).subscribe((res: any) => {
        this.response = res;
        this.characters.push(this.response)
        console.log(this.characters)
        this.gotData = true;
      })
    }
  }

}
