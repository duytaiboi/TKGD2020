import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AlertMessageService } from 'src/core/service/alert-message.service';
import { AlertService } from 'ngx-alerts';
import { SharedService } from 'src/core/service/shared.service';
import { RegulationService } from 'src/core/service/regulation.service';
import { CreateInvoiceModalComponent } from './create-invoice-modal/create-invoice-modal.component';
import { BillService } from 'src/core/service/bill.service';
import { CreateBillModalComponent } from './create-bill-modal/create-bill-modal.component';
import { Phieuthutien } from 'src/core/model/phieu-thu.model';
import { PhieuXuat } from 'src/core/model/phieu-xuat-hang.model';

@Component({
  selector: 'app-hoadon',
  templateUrl: './hoadon.component.html',
  styleUrls: ['./hoadon.component.scss']
})
export class HoaDonComponent implements OnInit {

  inputValue:any;
  modalRef: BsModalRef;
  config: ModalOptions = { class: 'modal-lg', backdrop: 'static' };
  agencyCode:string;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
    private alertMessageService: AlertMessageService,
    private alertService: AlertService,
    private billService: BillService,
    private regulationService: RegulationService) { }

  ngOnInit() {
    this.setAgencyCode();
  }

  createInvoice(editItem:PhieuXuat){
    this.modalRef = this.bsModalService.show(CreateInvoiceModalComponent, this.config)
    this.modalRef.content.readOnlyFlag=false;
    this.modalRef.content.agencyCode=this.agencyCode;
    this.modalRef.content.confirmationEvent.subscribe((result: boolean) => {
      if (result) {
        this.inputValue='';
        this.inputValue=result;
      }
    })
  }
  
  createBill(editItem:Phieuthutien){
    this.modalRef = this.bsModalService.show(CreateBillModalComponent, this.config)
    this.modalRef.content.readOnlyFlag=false;
    this.modalRef.content.agencyCode=this.agencyCode;
    this.modalRef.content.confirmationEvent.subscribe((result: boolean) => {
      if (result) {
        this.inputValue='';
        this.inputValue=result;
      }
    })
  }

  setAgencyCode(){
    if (name) {
    }
    this.route.queryParams.subscribe(agency => {
      this.agencyCode = agency['agency'];
    })
  }
}
