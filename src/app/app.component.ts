import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  isCollapsed = false;
  loggedIn = true;
  constructor(
  ) {

  }

  ngOnInit() {
    console.log('a');
  }

  logout() {
    this.loggedIn = false;
  }
}
