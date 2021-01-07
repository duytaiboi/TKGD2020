import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ["0933615558", Validators.required],
      pw: ["tan123", Validators.required],
    });
  }

  signin() {

    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.message.warning("Vui lòng điền đủ thông tin bạn nhé");
      return;
    }

    this.userService.login(this.form.value).subscribe((res) => {
      if (res && res.length) {
        this.userService.setUserStorage(res[0]);
        this.message.success("Đăng nhập thành công");
        this.router.navigate(["/tickets"]);
      } else {
        this.message.error("Vui lòng kiểm tra lại tài khoản/mật khẩu");
      }
    });
  }
}
