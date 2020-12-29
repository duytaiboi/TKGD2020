import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  // Display
  chon_xe = false;

  index = 0;
  disable = false;
  timXeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.timXeForm = this.fb.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
    });
  }
  onIndexChange(index: number): void {
    this.index = index;
    console.log(this.index);
  }

  goBack() {
    this.index = 2;
  }

  timXe() {
    console.log("ádas");
    this.chon_xe = true;
  }
  backToSearch() {
    this.chon_xe = false;
  }
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
