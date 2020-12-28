import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
})
export class TicketsComponent implements OnInit {
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
