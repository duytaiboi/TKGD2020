import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertMessageService } from 'src/core/service/alert-message.service';
import { AlertService } from 'ngx-alerts';
import { RegulationService } from 'src/core/service/regulation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CtPhieuxuat } from 'src/core/model/phieu-xuat-chi-tiet.model';
import { BillService } from 'src/core/service/bill.service';
import { PhieuXuatCreateModel } from 'src/core/model/phieuxuat-create.model';


@Component({
  selector: 'app-create-invoice-modal',
  templateUrl: './create-invoice-modal.component.html',
  styleUrls: ['./create-invoice-modal.component.scss']
})
export class CreateInvoiceModalComponent implements OnInit {

  confirmationEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  agencyFormGroup: FormGroup;
  agencyCode: string;
  readOnlyFlag:boolean;
  tongTien:number=0;
  inputObject: CtPhieuxuat = new CtPhieuxuat();
  phieuXuatCreateModel:PhieuXuatCreateModel= new PhieuXuatCreateModel();

  constructor(private router: Router,
    private bsModalRef: BsModalRef,
    private billService:BillService,
    private alertMessageService: AlertMessageService,
    private alertService: AlertService,
    private regulationService: RegulationService) { }

  ngOnInit() {
    this.createFormGroup();
    setTimeout(() => {
      if(this.readOnlyFlag)
      {
        this.thanhTien();
        this.agencyFormGroup.disable();
        document.getElementById("save-button").style.display="none";
      }
      else{

        document.getElementById("save-button").style.display="inline";
      }
    });
  }

  private createFormGroup() {
    this.agencyFormGroup = new FormGroup({
      daiLy: new FormControl('', [
        Validators.required,
        // Validators.pattern("^[a-zA-Z aàảãáạăằẳẵắặâầẩẫấậbcdđĐeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+$")
      ]),
      ngayLapPhieu: new FormControl('', [
        Validators.required,
      ]),
      phieuxuat: new FormControl('', [
        Validators.required,
      ]),
      matHang: new FormControl('', [
        Validators.required,
      ]),
      donVi: new FormControl('', [
        Validators.required,
      ]),
      soLuong: new FormControl('', [
        Validators.required,
      ]),
      donGia: new FormControl('', [
        Validators.required,
      ]),
      thanhTien: new FormControl('', [
        Validators.required,
      ]),
    })
  }
  onClickCloseButton() {
    this.confirmationEvent.emit(false);
    this.closeModal();
  }

  private closeModal() {
    this.bsModalRef.hide();
  }

  onClickSave(){
    this.inputObject.thanhTien=this.tongTien;
    this.phieuXuatCreateModel.phieuXuatCt=this.inputObject;
    this.phieuXuatCreateModel.maHoSo=this.agencyCode;
    console.log(this.phieuXuatCreateModel);
    this.billService.createInvoice(this.phieuXuatCreateModel).subscribe(result=>{
      if (result) {
        this.alertMessageService.alertShowing(result);
        if (result.responeStatus == 1) {
          this.confirmationEvent.emit(true);
        }
        else {
          this.confirmationEvent.emit(false);
        }
      }
    })

  }

  thanhTien(){
    this.tongTien=this.agencyFormGroup.controls['donGia'].value* this.agencyFormGroup.controls['soLuong'].value;
  }
}
