import { Component, OnInit } from '@angular/core';
import { SeatMap } from 'src/core/model/seat-map.model';
import { SeatModel } from 'src/core/model/seat.model';

@Component({
  selector: 'app-dat-ve-xe',
  templateUrl: './dat-ve-xe.component.html',
  styleUrls: ['./dat-ve-xe.component.scss']
})
export class DatVeXeComponent implements OnInit {

  listSeatsA: SeatModel[] = [
    {
      digit: "A",
      index: 0,
      status: false, reserved: true, price: 20.000,
    },
    {
      digit: "A",
      index: 1,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 2,
      status: false, reserved: true, price: 20.000,
    },
    {
      digit: "A",
      index: 3,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 4,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 5,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 6,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 7,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 8,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "A",
      index: 9,
      status: false, reserved: false, price: 20.000,
    },
  ];
  listSeatsB: SeatModel[] = [
    {
      digit: "B",
      index: 0,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 1,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 2,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 3,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 4,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 5,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 6,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 7,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 8,
      status: false, reserved: false, price: 20.000,
    },
    {
      digit: "B",
      index: 9,
      status: false, reserved: false, price: 20.000,
    },
  ];

  seatsMapA: SeatMap = new SeatMap(this.listSeatsA);
  seatsMapB: SeatMap = new SeatMap(this.listSeatsB);

  listSeats: SeatModel[];
  clickedSeats: SeatModel[] = [];

  totalPrice: number = 0;

  constructor() { }

  ngOnInit() {
    this.prepareSeatsMap()
  }

  onSeatClick(seat: SeatModel) {
    if (seat.digit === "A") {
      var selectedSeat = (<HTMLElement>document.getElementsByClassName("A")[seat.index]);
    }
    else {
      var selectedSeat = (<HTMLElement>document.getElementsByClassName("B")[seat.index]);
    }

    if (!seat.status) {
      selectedSeat.style.backgroundColor = "rgba(61.00000016391277, 213.00000250339508, 224.000001847744, 1)";
      seat.status = !seat.status;
      this.clickedSeats.push(seat);
    }
    else {
      selectedSeat.style.backgroundColor = "white";
      selectedSeat.style.color = "black";
      seat.status = !seat.status;
      this.clickedSeats = [...this.clickedSeats.filter(x => x.index !== seat.index)];
    }
    var seatModel = new SeatModel();
    seatModel.digit = selectedSeat.innerHTML;
    this.calculatePrice()
  }

  private calculatePrice() {
    this.clickedSeats.forEach(seat => {
      this.totalPrice = this.totalPrice + seat.price;
    });
  }

  private prepareSeatsMap() {
    this.listSeats = [];
    this.listSeats = this.listSeats.concat(this.listSeatsA);
    this.listSeats = this.listSeats.concat(this.listSeatsB);
  }

}
