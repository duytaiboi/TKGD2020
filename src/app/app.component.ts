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
  }

  logout() {
    this.loggedIn = false;
  }
}
