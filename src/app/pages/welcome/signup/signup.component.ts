import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      fullname: ["", Validators.required],
      email: ["", Validators.required],
      numbers: ["", Validators.required],
      pw: ["", Validators.required],
    });
  }

  signupWithForm() {

    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.message.warning("Vui lòng điền đủ thông tin bạn nhé");
      return;
    }

    this.userService.add(this.form.value).subscribe((res) => {
      this.message.success("Đăng ký thành công");
      this.router.navigate(["/tickets"]);
    });
  }
}
