import { SeatModel } from "./seat.model";

export class SeatMap {
    Row:number;
    Column:number;
    listSeat:SeatModel[];
    constructor(listSeats:SeatModel[]){
        this.Row=5;
        this.Column=2;
        this.listSeat= listSeats;
    }
 }
 
