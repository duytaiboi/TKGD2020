import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
import { XeService } from "src/app/services/xe.service";

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
  screen_chon_xe = false;

  index = 0;
  disable = false;
  timXeForm: FormGroup;
  xe = [];

  constructor(
    private fb: FormBuilder,
    private xeSV: XeService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.timXeForm = this.fb.group({
      ngay_di: [new Date(), Validators.required],
      diem_den: ["Hà Nội", Validators.required],
      diem_di: ["Sài Gòn", Validators.required],
    });
  }

  onIndexChange(index: number): void {
    this.index = index;
  }

  goBack() {
    this.index = 2;
  }

  timXe() {
    console.log(this.timXeForm.value.ngay_di.toLocaleDateString());
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
  
  chonXe(item) {
    console.log(item);
    this.toChonViTri();
  }

  toChonViTri() {
    this.index = 1;
  }
  
  toDiemDonTra() {
    this.index = 2;
  }

  toThanhToan() {
    this.index = 3;
  }
  
  backToSearch() {
    this.screen_chon_xe = false;
    window.scrollTo(0, 0);
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
