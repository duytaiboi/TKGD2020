import { BehaviorSubject, Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { VeService } from "src/app/services/ve.service";
import { XeService } from "src/app/services/xe.service";
import { SeatMap } from "src/core/model/seat-map.model";
import { SeatModel } from "src/core/model/seat.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RatingModalComponent } from "src/app/modals/rating-modal/rating-modal.component";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
})
export class TicketsComponent implements OnInit {
  // User
  loggedIn = new Observable<boolean>();
  user: any;

  // Display
  screen_chon_xe = false;
  indexVal = 0;
  index = new BehaviorSubject(0);
  disable = false;
  timXeForm: FormGroup;
  customerInfoForm: FormGroup;
  xe = [];
  // Xe đã chọn
  xe_da_chon = null;
  ghe_da_chon: SeatModel[] = [];
  diem_don = null; // điểm đón đã chọn
  diem_tra = null; // điểm trả đã chọn

  // Chọn ghế
  clonedSeatsMapA: SeatModel[] = [];
  clonedSeatsMapB: SeatModel[] = [];
  listSeatsA: SeatModel[] = [
    {
      digit: "A",
      index: 0,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 1,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 2,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 3,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 4,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 5,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 6,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 7,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 8,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "A",
      index: 9,
      status: false,
      reserved: true,
      price: 20.0,
    },
  ];
  listSeatsB: SeatModel[] = [
    {
      digit: "B",
      index: 0,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 1,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 2,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 3,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 4,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 5,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 6,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 7,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 8,
      status: false,
      reserved: true,
      price: 20.0,
    },
    {
      digit: "B",
      index: 9,
      status: false,
      reserved: true,
      price: 20.0,
    },
  ];
  a: SeatModel[] = [];
  b: SeatModel[] = [];
  seatsMapA: SeatMap = new SeatMap(this.listSeatsA);
  seatsMapB: SeatMap = new SeatMap(this.listSeatsB);
  clonedMapA: SeatMap = new SeatMap(this.a);
  clonedMapB: SeatMap = new SeatMap(this.b);
  listSeats: SeatModel[];
  clickedSeats: SeatModel[] = [];

  totalPrice: number = 0;
  pt_thanh_toans = ["Thẻ Visa", "Thẻ ATM", "Momo", "Tiền mặt"];
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private xeSV: XeService,
    private message: NzMessageService,
    private veSV: VeService,
    private router: Router,
    private userService: UserService
  ) {
    this.user = userService.getUserStorage();
  }

  ngOnInit() {
    this.timXeForm = this.fb.group({
      ngay_di: [new Date(2020, 11, 30), Validators.required],
      diem_den: ["Hà Nội", Validators.required],
      diem_di: ["Đà Nẵng", Validators.required],
    });
    this.customerInfoForm = this.fb.group({
      ten_kh: [null, [Validators.required]],
      sdt_kh: [null, [Validators.required]],
      pt_thanh_toan: [this.pt_thanh_toans[0], [Validators.required]],
      email_kh: null,
    });
    this.userService.isLoggedIn().subscribe((res) => {
      this.user = this.userService.getUserStorage();
      if (res) {
        this.customerInfoForm.patchValue({
          ten_kh: this.user.fullname,
          sdt_kh: this.user.numbers,
          email_kh: this.user.email,
        });
      } else {
        this.customerInfoForm.patchValue({
          ten_kh: null,
          sdt_kh: null,
          email_kh: null,
        });
      }
    });
    this.index.subscribe((res) => {
      if (res === 3) {
        this.getUserInfos();
      }
    });
  }

  getUserInfos() {
    this.user = this.userService.getUserStorage();
    if (this.user) {
      this.customerInfoForm.patchValue({
        ten_kh: this.user.fullname,
        sdt_kh: this.user.numbers,
        email_kh: this.user.email,
      });
    } else {
      this.customerInfoForm.patchValue({
        ten_kh: null,
        sdt_kh: null,
        email_kh: null,
      });
    }
  }

  // đặt vé
  datVe() {
    for (const i in this.customerInfoForm.controls) {
      this.customerInfoForm.controls[i].markAsDirty();
      this.customerInfoForm.controls[i].updateValueAndValidity();
    }
    if (this.customerInfoForm.invalid) {
      return;
    }
    //this.get();
    const customerInfo = this.customerInfoForm.value;
    // vị trí
    const vi_tri = this.clickedSeats.map((e) => e.digit + e.index);
    const model = {
      ma_ve: Date.now().toString(36),
      ten_kh: customerInfo.ten_kh,
      sdt_kh: customerInfo.sdt_kh,
      email_kh: customerInfo.email_kh,
      ten_xe: this.xe_da_chon.ten,
      sdt_xe: this.xe_da_chon.sdt,
      diem_di: this.xe_da_chon.diem_di,
      diem_den: this.xe_da_chon.diem_den,
      diem_don: this.diem_don,
      diem_tra: this.diem_tra,
      ngay_di: this.xe_da_chon.ngay_di,
      pt_thanh_toan: customerInfo.pt_thanh_toan,
      tong_tien: this.totalPrice,
      vi_tri: vi_tri,
    };
    this.veSV.dat_ve(model).subscribe((res) => {
      if (res && res.id) {
        this.message.success("Đặt vé thành công");
        this.router.navigate(["tickets/ve-da-dat"]);
      } else {
        this.message.error("Đặt vé thất bại");
      }
    });
  }

  // Tìm xe
  timXe() {
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

  // chọn xe
  chonXe(item) {
    this.xe_da_chon = item;
    this.diem_don = this.xe_da_chon.diem_don[0];
    this.diem_tra = this.xe_da_chon.diem_tra[
      this.xe_da_chon.diem_tra.length - 1
    ];
    // this.toDiemDonTra();
    this.toChonViTri();
  }
  toChonViTri() {
    this.indexVal = 1;
    this.index.next(1);
    this.prepareSeatsMap();
    this.clickedSeats = [];
    this.ghe_da_chon = [];
  }

  toDiemDonTra() {
    this.indexVal = 2;
    this.index.next(2);
  }

  toThanhToan() {
    this.indexVal = 3;
    this.index.next(3);
  }

  backToSearch() {
    this.screen_chon_xe = false;
    window.scrollTo(0, 0);
  }

  transfer() {
    const current_diem_di = this.timXeForm.value.diem_di;
    const current_diem_den = this.timXeForm.value.diem_den;
    this.timXeForm.controls.diem_di.setValue(current_diem_den);
    this.timXeForm.controls.diem_den.setValue(current_diem_di);
  }

  onDateChange(result: Date[]): void {}

  nextStep() {
    if (this.indexVal == 1 && !this.clickedSeats.length) {
      this.message.warning("Vui lòng chọn vị trí");
      return;
    }
    this.indexVal++;
    this.index.next(this.indexVal);
  }
  previousStep() {
    if (this.indexVal > 0) {
      if (this.indexVal == 1) {
        this.clearSeatStatus(this.clickedSeats);
      }
      this.indexVal--;
      this.index.next(this.indexVal);
    } else {
      this.backToSearch();
    }
  }

  // Chọn ghế
  onSeatClick(seat: SeatModel) {
    if (seat.digit === "A") {
      var selectedSeat = <HTMLElement>(
        document.getElementsByClassName("A")[seat.index]
      );
    } else {
      var selectedSeat = <HTMLElement>(
        document.getElementsByClassName("B")[seat.index]
      );
    }

    if (!seat.status) {
      selectedSeat.style.backgroundColor =
        "rgba(61.00000016391277, 213.00000250339508, 224.000001847744, 1)";
      seat.status = !seat.status;
      this.clickedSeats.push(seat);
      this.ghe_da_chon.push(seat);
    } else {
      selectedSeat.style.backgroundColor = "white";
      selectedSeat.style.color = "black";
      seat.status = !seat.status;
      this.clickedSeats = [
        ...this.clickedSeats.filter((x) => x.index !== seat.index),
      ];
      this.ghe_da_chon = [
        ...this.ghe_da_chon.filter((x) => x.index !== seat.index),
      ];
    }
    var seatModel = new SeatModel();
    seatModel.digit = selectedSeat.innerHTML;
    this.calculatePrice();
  }

  private mockModal() {
    const informModalRef = this.modalService.open(RatingModalComponent);
    informModalRef.componentInstance.title = "Phương Trang";
    informModalRef.componentInstance.message =
      "Hãy đánh giá trải nghiệm của bạn nào...";
  }

  private calculatePrice() {
    this.totalPrice = this.clickedSeats.length * this.xe_da_chon.gia_ve;
  }

  private clearSeatStatus(clickedSeats: any) {
    this.clickedSeats.forEach((element) => {
      if (element.digit === "A") {
        var selectedSeat = <HTMLElement>(
          document.getElementsByClassName("A")[element.index]
        );
      } else {
        var selectedSeat = <HTMLElement>(
          document.getElementsByClassName("B")[element.index]
        );
      }
      element.status = !element.status;
      selectedSeat.style.backgroundColor = "white";
      selectedSeat.style.color = "black";
    });
    this.listSeatsA.forEach((element) => {
      if (element.reserved == false) {
        element.reserved = true;
      }
    });
    this.listSeatsB.forEach((element) => {
      if (element.reserved == false) {
        element.reserved = true;
      }
    });
  }

  private prepareSeatsMap() {
    this.clonedMapA.listSeat = [...this.listSeatsA];
    this.clonedMapB.listSeat = [...this.listSeatsB];
    this.listSeats = [];

    this.listSeats = this.listSeats.concat(this.clonedMapA.listSeat);
    this.listSeats = this.listSeats.concat(this.clonedMapB.listSeat);
    for (var i = 0; i < this.clonedMapA.listSeat.length; i++) {
      for (var j = 0; j < this.xe_da_chon.vi_tri_trong.length; j++) {
        if (
          this.clonedMapA.listSeat[i].digit ===
            this.xe_da_chon.vi_tri_trong[j].digit &&
          this.clonedMapA.listSeat[i].index ===
            Number(this.xe_da_chon.vi_tri_trong[j].index)
        ) {
          this.clonedMapA.listSeat[i].reserved = false;
        }
      }
    }
    for (var i = 0; i < this.clonedMapB.listSeat.length; i++) {
      for (var j = 0; j < this.xe_da_chon.vi_tri_trong.length; j++) {
        if (
          this.clonedMapB.listSeat[i].digit ===
            this.xe_da_chon.vi_tri_trong[j].digit &&
          this.clonedMapB.listSeat[i].index ===
            Number(this.xe_da_chon.vi_tri_trong[j].index)
        ) {
          this.clonedMapB.listSeat[i].reserved = false;
        }
      }
    }
  }
}
