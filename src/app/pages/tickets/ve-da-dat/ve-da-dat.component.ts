import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { UserService } from "src/app/services/user.service";
import { VeService } from "src/app/services/ve.service";

@Component({
  selector: "app-ve-da-dat",
  templateUrl: "./ve-da-dat.component.html",
  styleUrls: ["./ve-da-dat.component.scss"],
})
export class VeDaDatComponent implements OnInit {
  user: any;
  ves: any[] = [];

  constructor(
    private veSV: VeService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private userSV: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userSV.getUserStorage();
    console.log(this.user);
    if (this.user) {
      this.veSV.ds_ve(this.user.email).subscribe((res) => {
        console.log(res);
        this.ves = res;
      });
    }
  }
}
