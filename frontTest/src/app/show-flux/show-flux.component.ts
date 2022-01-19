import { Component, OnInit } from '@angular/core';
import { GetFluxService } from '../service/get-flux.service';

@Component({
  selector: 'app-show-flux',
  templateUrl: './show-flux.component.html',
  styleUrls: ['./show-flux.component.css']
})
export class ShowFluxComponent implements OnInit {

  dataTab:any;
  constructor(private getFluxService:GetFluxService) { }

  ngOnInit(): void {
    this.getFluxService.getFlux().subscribe(
      data=>{
        console.log(data);
        this.dataTab = data;
      }
    )
  }

}
