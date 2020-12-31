import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd";
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
  xe = [];
  // Xe đã chọn
  xe_da_chon = null;
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
      reserved: false,
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
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 4,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 5,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 6,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 7,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 8,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "A",
      index: 9,
      status: false,
      reserved: false,
      price: 20.0,
    },
  ];
  listSeatsB: SeatModel[] = [
    {
      digit: "B",
      index: 0,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 1,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 2,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 3,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 4,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 5,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 6,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 7,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 8,
      status: false,
      reserved: false,
      price: 20.0,
    },
    {
      digit: "B",
      index: 9,
      status: false,
      reserved: false,
      price: 20.0,
    },
  ];

  seatsMapA: SeatMap = new SeatMap(this.listSeatsA);
  seatsMapB: SeatMap = new SeatMap(this.listSeatsB);

  listSeats: SeatModel[];
  clickedSeats: SeatModel[] = [];

  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private xeSV: XeService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.timXeForm = this.fb.group({
      ngay_di: [new Date(2020, 11, 30), Validators.required],
      diem_den: ["Hà Nội", Validators.required],
      diem_di: ["Đà Nẵng", Validators.required],
    });
    this.prepareSeatsMap();
  }

  onIndexChange(index: number): void {
    if (index < this.index) {
      this.index = index;
    }
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

  chonXe(item) {
    console.log(item);
    this.xe_da_chon = item;
    this.diem_don = this.xe_da_chon.diem_don[0];
    this.diem_tra = this.xe_da_chon.diem_tra[
      this.xe_da_chon.diem_tra.length - 1
    ];
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

  transfer() {
    const current_diem_di = this.timXeForm.value.diem_di;
    const current_diem_den = this.timXeForm.value.diem_den;
    this.timXeForm.controls.diem_di.setValue(current_diem_den);
    this.timXeForm.controls.diem_den.setValue(current_diem_di);
  }

  onDateChange(result: Date[]): void {
    console.log("onChange: ", result);
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
    console.log(seat);
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
    } else {
      selectedSeat.style.backgroundColor = "white";
      selectedSeat.style.color = "black";
      seat.status = !seat.status;
      this.clickedSeats = [
        ...this.clickedSeats.filter((x) => x.index !== seat.index),
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
  }
}
