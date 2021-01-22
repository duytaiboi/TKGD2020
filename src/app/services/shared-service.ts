import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SharedService {
    constructor() { }

    starPTrang: number = 4;
    starTBuoi: number = 4;
    updateFlag:EventEmitter<number> = new EventEmitter();
    number:number=1;

    getStarTB() {
        return this.starTBuoi;
    }

    getStarPT() {
        return this.starPTrang;
    }

    setStartPT(star: number) {
        this.starPTrang = star;
    }

    setStarTB(star: number) {
        this.starTBuoi = star;
    }

    updateFired(){
        this.number++;
        this.updateFlag.emit(this.number);
    }

}
