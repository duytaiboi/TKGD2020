import { CtPhieuxuat } from "./phieu-xuat-chi-tiet.model";

export class PhieuXuatCreateModel {
    id: number;
    phieuXuatCt:CtPhieuxuat;
    maHoSo: string;
    ngayLap: string;
    constructor(){
        this.phieuXuatCt=new CtPhieuxuat();
    }
    
}
