import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/core/service/bill.service';
import { BillModel } from 'src/core/model/bill.model';
import { Phieuthutien } from 'src/core/model/phieu-thu.model';
import { CtPhieuxuat } from 'src/core/model/phieu-xuat-chi-tiet.model';
import { PhieuXuat } from 'src/core/model/phieu-xuat-hang.model';
import { AgencyBillModel } from 'src/core/model/agency-bill.model';
import { CreateInvoiceModalComponent } from '../create-invoice-modal/create-invoice-modal.component';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'hoadon-datashowing',
  templateUrl: './hoadon-datashowing.component.html',
  styleUrls: ['./hoadon-datashowing.component.scss']
})
export class HoaDonDatashowingComponent implements OnInit {

  modalRef: BsModalRef;
  config: ModalOptions = { class: 'modal-lg', backdrop: 'static' };

  constructor(private billService: BillService,
    private activatedRoute: ActivatedRoute,
    private bsModalService: BsModalService) { }

  @Input() someInput: string;
  invoiceObject: CtPhieuxuat = new CtPhieuxuat();
  agency: string;
  numberOfBills: number;
  listAgencyBills: BillModel = new BillModel();
  agencyBillModel: AgencyBillModel = new AgencyBillModel();
  listAgencyBill: Phieuthutien[] = [];
  listAgencyInvoices: PhieuXuat[] = [];

  ngOnInit() {
    this.loadBill();
  }

  ngOnChange() {
    this.loadBill();
  }

  loadBill() {
    if (name) {

    }
    this.activatedRoute.queryParams.subscribe(agency => {
      this.agency = agency['agency'];
    })
    this.agencyBillModel.mahoso = this.agency;
    this.billService.getAgencyBill(this.agencyBillModel).subscribe(result => {
      if (result) {
        this.listAgencyBills = result.data;
        this.listAgencyBill = this.listAgencyBills.donThuTien;
        this.listAgencyInvoices = this.listAgencyBills.donXuatHang;
        this.numberOfBills = this.listAgencyBill.length;
        console.log(this.listAgencyBills);
      }
    })
  }

  onBillClick(item) {

  }

  onInvoiceClick(item: PhieuXuat) {
    var invoiceCodeModel: AgencyBillModel = new AgencyBillModel();
    invoiceCodeModel.mahoso = item.maphieuxh;
    console.log(invoiceCodeModel)
    this.billService.getInvoiceDetail(invoiceCodeModel).subscribe(result => {
      this.invoiceObject = result.data;
      this.modalRef = this.bsModalService.show(CreateInvoiceModalComponent, this.config)
      this.modalRef.content.inputObject = this.invoiceObject;
      this.modalRef.content.agencyCode = this.agency;
      this.modalRef.content.readOnlyFlag=true;
      this.modalRef.content.confirmationEvent.subscribe((result: boolean) => {
        if (result) {

        }
      })
    });
  }
}
