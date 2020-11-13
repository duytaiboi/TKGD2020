import { CtPhieuxuat } from "./phieu-xuat-chi-tiet.model";
import { Phieuthutien } from "./phieu-thu.model";
import { PhieuXuat } from "./phieu-xuat-hang.model";

export class BillModel {
  donXuatHang:PhieuXuat[];
  donThuTien:Phieuthutien[];

  public BillModel(){
      this.donThuTien= new Array(0);
      this.donXuatHang = new Array(0);
  }
}
