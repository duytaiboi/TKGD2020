import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegulationService } from 'src/core/service/regulation.service';
import { SharedService } from 'src/core/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private route:Router,
    private regulationService : RegulationService,
    private sharedSerivce:SharedService ) { }

  ngOnInit() {
   
  }
}
