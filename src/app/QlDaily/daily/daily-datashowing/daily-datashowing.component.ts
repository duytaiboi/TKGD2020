import { Component, OnInit } from '@angular/core';
import { AgencyService } from 'src/core/service/agency.service';
import { AgencyModel } from 'src/core/model/agency.model';
import { AlertService } from 'ngx-alerts';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { AlertMessageService } from 'src/core/service/alert-message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateAgencyModalComponent } from '../create-agency-modal/create-agency-modal.component';
import { SharedService } from 'src/core/service/shared.service';
import { RegulationModel } from 'src/core/model/regulation.model';
import { RegulationService } from 'src/core/service/regulation.service';

@Component({
  selector: 'daily-datashowing',
  templateUrl: './daily-datashowing.component.html',
  styleUrls: ['./daily-datashowing.component.scss']
})
export class DailyDatashowingComponent implements OnInit {
  listAgency: any[] = [];
  listShowingAgency: any[] = [];

  listSearchingItems: { id: number, value: string }[] = [
    { id: 1, value: "Họ Tên" },
    { id: 2, value: "Mã Đại Lý" },
  ]

  searchType: any;
  searchString:any;
  listShowingData: any[] = [];
  regulationList: RegulationModel = new RegulationModel();

  inputData: AgencyModel = new AgencyModel();
  editObject: AgencyModel = new AgencyModel();

  modalRef: BsModalRef;
  config: ModalOptions = { class: 'modal-lg', backdrop: 'static' };
  tempBool: boolean = true;

  constructor(private agencyService: AgencyService,
    private router: Router,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
    private alertMessageService: AlertMessageService,
    private alertService: AlertService,
    private sharedService: SharedService,
    private regulationService: RegulationService) { }

  ngOnInit() {
    this.getAgencyData();
  }


  getAgencyData() {
    this.regulationService.getRegulation().subscribe(result => {
      this.regulationList = result;
    })
    this.agencyService.get().subscribe(result => {
      if (result) {
        this.listAgency = result.data;
        this.listShowingAgency=result.data;
        this.alertService.success("Load dữ liệu thành công");
      }
      else {
        this.alertService.danger("Load dữ liệu thất bại");
      }
    })
  }

  onClickCreate() {
    var listAgencyTypes = this.listAgency.map(x => x.maloaidaily);
    this.modalRef = this.bsModalService.show(CreateAgencyModalComponent, this.config)
    this.modalRef.content.listShowingAgency = this.listAgency;
    this.modalRef.content.regulationsList = this.regulationList;
    this.modalRef.content.listAgencyTypes = listAgencyTypes;
    this.modalRef.content.numberOfAgencyTypes = this.countUnique(this.listAgency);
    this.modalRef.content.confirmationEvent.subscribe((result: boolean) => {
      if (result) {
        this.getAgencyData();
      }
    })
  }

  onClickEdit(editItem: AgencyModel) {
    var listAgencyTypes = this.listAgency.map(x => x.maloaidaily);
    this.editObject = JSON.parse(JSON.stringify(editItem));
    this.modalRef = this.bsModalService.show(CreateAgencyModalComponent, this.config)
    this.modalRef.content.inputObject = this.editObject;
    this.modalRef.content.editFlag = this.tempBool;
    this.modalRef.content.listShowingAgency = this.listAgency;
    this.modalRef.content.regulationsList = this.regulationList;
    this.modalRef.content.listAgencyTypes = listAgencyTypes;
    this.modalRef.content.numberOfAgencyTypes = this.countUnique(this.listAgency);
    this.modalRef.content.confirmationEvent.subscribe((result: boolean) => {
      if (result) {
        this.getAgencyData();
      }
    })
  }

  onBillClick(agency: AgencyModel) {
    this.router.navigate(["../hoadon"], {
      relativeTo: this.route, queryParams: {
        agency: `${agency.mahoso}`
      }
    });
  }

  countUnique(iterable: AgencyModel[]) {
    var returnValue = iterable.map(item => item.maloaidaily)
      .filter((value, index, self) => self.indexOf(value) === index)
    return returnValue.length;
  }

  onClickSearch() {
    if(this.searchType==1)
    {
      this.listShowingAgency = [...this.listAgency.filter(x => x.tendaily.indexOf(this.searchString) >= 0)];
    }
    else{
      this.listShowingAgency = [...this.listAgency.filter(x => x.mahoso.indexOf(this.searchString) >= 0)];
    }
  }
}
