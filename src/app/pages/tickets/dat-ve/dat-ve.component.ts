import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-dat-ve",
  templateUrl: "./dat-ve.component.html",
  styleUrls: ["./dat-ve.component.scss"],
})
export class DatVeComponent implements OnInit {
  index = 0;
  disable = false;
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
    });
  }
  onIndexChange(index: number): void {
    this.index = index;
  }

  goBack() {
    this.index = 2;
  }
}
