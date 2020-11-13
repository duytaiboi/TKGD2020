import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { AgencyService } from 'src/core/service/agency.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  constructor(private agencyService:AgencyService,
    ) { }

  ngOnInit() {
    this.agencyService.get().subscribe(result=>{
      if(result)
      {
        console.log()
      }
    })
  }

}
