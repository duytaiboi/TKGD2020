import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  selectedValue = null;
  selectedValue2 = null;
  isChanged = false;
  date = null;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.selectedValue);
  }

  transfer() {
    this.isChanged = !this.isChanged;
    console.log(this.selectedValue2);
  }

  onDateChange(result: Date[]): void {
    console.log("onChange: ", result);
  }
}
