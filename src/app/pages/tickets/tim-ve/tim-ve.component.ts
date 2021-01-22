import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { VeService } from "src/app/services/ve.service";

@Component({
  selector: "app-tim-ve",
  templateUrl: "./tim-ve.component.html",
  styleUrls: ["./tim-ve.component.scss"],
})
export class TimVeComponent implements OnInit {
  ve: any = null;
  validateForm!: FormGroup;

  constructor(
    private veSV: VeService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      sdt_kh: [null, [Validators.required]],
      ma_ve: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid) {
      return;
    }
    this.tim_ve();
  }

  tim_ve() {
    const model = this.validateForm.value;
    this.veSV.tim_ve(model.ma_ve, model.sdt_kh).subscribe((res) => {
      if (res && res.length) {
        this.ve = res[0];
      } else {
        this.message.error("Không tìm thấy vé hợp lệ");
      }
    });
  }
}