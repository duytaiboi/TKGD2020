import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {

  timXeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.timXeForm = this.fb.group({
      ngay_di: [new Date(2020, 11, 30), Validators.required],
      diem_den: ["Hà Nội", Validators.required],
      diem_di: ["Đà Nẵng", Validators.required],
    });
  }

  timXe() {
    console.log(this.timXeForm.value.ngay_di);
    for (const i in this.timXeForm.controls) {
      this.timXeForm.controls[i].markAsDirty();
      this.timXeForm.controls[i].updateValueAndValidity();
    }
    if (this.timXeForm.invalid) {
      return;
    }

    this.xeSV.timXe(this.timXeForm.value).subscribe((res) => {
      if (res && res.length) {
        this.screen_chon_xe = true;
        this.xe = res;
      } else {
        this.message.error("Không tìm thấy xe");
      }
    });
  }
}
