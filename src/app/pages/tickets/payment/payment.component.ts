import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  index = 3;
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
