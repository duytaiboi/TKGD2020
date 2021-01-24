import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NzMessageService } from "ng-zorro-antd";
import { RatingModalComponent } from "src/app/modals/rating-modal/rating-modal.component";
import { SharedService } from "src/app/services/shared-service";
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
    private sharedService: SharedService,
    private modalService: NgbModal,
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

  submitTicketRating(): void {
    this.veSV.danh_gia_ve(this.ve, this.ve.id).subscribe((result) => {
      if (result) {
        this.message.success("Đánh giá thành công");
        if (this.ve.ten === "Thạnh Bưởi") {
          this.sharedService.setStarTB = this.ve.danh_gia;
        }
        if (this.ve.ten === "Phương Trang") {
          this.sharedService.setStartPT = this.ve.danh_gia;
        }
      }
    });
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

  onRatingClick() {
    const informModalRef = this.modalService.open(RatingModalComponent);
    informModalRef.componentInstance.title = "Phương Trang";
    informModalRef.componentInstance.message =
      "Hãy đánh giá trải nghiệm của bạn nào...";
    informModalRef.componentInstance.buttonSubmitClickEvent.subscribe(
      (star) => {
        this.ve.danh_gia = star;
        this.submitTicketRating();
        this.sharedService.updateFlag.emit(2);
        informModalRef.close();
      }
    );
  }
}
