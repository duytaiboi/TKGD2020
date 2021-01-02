import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { VeService } from "src/app/services/ve.service";
import { XeService } from "src/app/services/xe.service";
import { SeatMap } from "src/core/model/seat-map.model";
import { SeatModel } from "src/core/model/seat.model";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
})
export class TicketsComponent implements OnInit {
  // Display
  screen_chon_xe = false;

  index = 0;
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

  seatsMapA: SeatMap = new SeatMap(this.listSeatsA);
  seatsMapB: SeatMap = new SeatMap(this.listSeatsB);

  listSeats: SeatModel[];
  clickedSeats: SeatModel[] = [];

  totalPrice: number = 0;
  pt_thanh_toans = ["Thẻ Visa", "Thẻ ATM", "Momo", "Tiền mặt"];
  constructor(
    private fb: FormBuilder,
    private xeSV: XeService,
    private message: NzMessageService,
    private veSV: VeService,
    private router: Router
  ) { }

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

    const model = {
      ma_ve: Date.now().toString(36),
      ten_kh: customerInfo.ten_kh,
      sdt_kh: customerInfo.sdt_kh,
      email_kh: customerInfo.email_kh,
      ten_xe: this.xe_da_chon.ten_xe,
      sdt_xe: this.xe_da_chon.sdt_xe,
      diem_di: this.xe_da_chon.diem_di,
      diem_den: this.xe_da_chon.diem_den,
      diem_don: this.diem_don,
      diem_tra: this.diem_tra,
      vi_tri: ["A01", "B02"],
      ngay_di: this.xe_da_chon.ngay_di,
      pt_thanh_toan: customerInfo.pt_thanh_toan,
      tong_tien: this.totalPrice,
    };
    this.veSV.dat_ve(model).subscribe((res) => {
      if (res && res.id) {
        this.message.success("Đặt vé thành công");
        this.router.navigate(['tickets/ve-da-dat']);
      }
      else {
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
    this.index = 1;
    this.prepareSeatsMap();
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

  transfer() {
    const current_diem_di = this.timXeForm.value.diem_di;
    const current_diem_den = this.timXeForm.value.diem_den;
    this.timXeForm.controls.diem_di.setValue(current_diem_den);
    this.timXeForm.controls.diem_den.setValue(current_diem_di);
  }

  onDateChange(result: Date[]): void {
  }

  nextStep() {
    this.index++;
  }
  previousStep() {
    if (this.index > 0) {
      this.index--;
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

  private calculatePrice() {
    this.clickedSeats.forEach((seat) => {
      this.totalPrice = this.totalPrice + seat.price;
    });
  }

  private prepareSeatsMap() {
    this.listSeats = [];
    this.listSeats = this.listSeats.concat(this.listSeatsA);
    this.listSeats = this.listSeats.concat(this.listSeatsB);
    for (var i = 0; i < this.listSeatsA.length; i++) {
      for (var j = 0; j < this.xe_da_chon.vi_tri_trong.length; j++) {
        console.log(this.listSeatsA[i].digit);
        console.log(this.xe_da_chon.vi_tri_trong[j].digit);
        console.log(this.listSeatsA[i].index);
        console.log(this.xe_da_chon.vi_tri_trong[j].index);
        if (this.listSeatsA[i].digit===this.xe_da_chon.vi_tri_trong[j].digit && this.listSeatsA[i].index===Number(this.xe_da_chon.vi_tri_trong[j].index))
        {
          this.listSeatsA[i].reserved=false;
        }
      }
    }
    for (var i = 0; i < this.listSeatsB.length; i++) {
      for (var j = 0; j < this.xe_da_chon.vi_tri_trong.length; j++) {
        if (this.listSeatsB[i].digit===this.xe_da_chon.vi_tri_trong[j].digit && this.listSeatsB[i].index===Number(this.xe_da_chon.vi_tri_trong[j].index))
        {
          this.listSeatsB[i].reserved=false;
        }
      }
    }
  }
}
