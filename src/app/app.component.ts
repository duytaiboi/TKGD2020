import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  loggedIn = new Observable<boolean>();
  user: any;
  constructor(private userService: UserService) {
    this.user = userService.getUserStorage();
  }

  ngOnInit() {
    this.userService.isLoggedIn().subscribe((res) => {
      console.log(res);
      this.user = this.userService.getUserStorage();
      console.log(this.user);
    });
  }

  logout() {
    this.userService.logOut();
    this.user = null;
  }
}
