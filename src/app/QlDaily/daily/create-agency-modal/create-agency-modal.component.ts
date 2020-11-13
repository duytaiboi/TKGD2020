import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgencyService } from 'src/core/service/agency.service';
import { AgencyModel } from 'src/core/model/agency.model';

import { AlertMessageService } from 'src/core/service/alert-message.service';
import { domain } from 'process';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { AlertService } from 'ngx-alerts';
import { SharedService } from 'src/core/service/shared.service';
import { RegulationModel } from 'src/core/model/regulation.model';


@Component({
  selector: 'app-create-agency-modal',
  templateUrl: './create-agency-modal.component.html',
  styleUrls: ['./create-agency-modal.component.scss']
})
export class CreateAgencyModalComponent implements OnInit {

  confirmationEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  agencyFormGroup: FormGroup;
  listShowingAgency: AgencyModel[] = [];
  listAgencyTypes: string[] = [];
  regulationsList: any;

  inputObject: AgencyModel = new AgencyModel();
  editObject: AgencyModel = new AgencyModel();
  showingObject: AgencyModel = new AgencyModel();
  infoMessage: string = "";
  code: string;
  agencyName: string;
  agencyType: string;
  phone: string;
  address: string;
  districtCode: string;
  email: string;
  editFlag: boolean = false;
  debt: string;
  numberOfAgencyTypes:number;

  constructor(private bsModalRef: BsModalRef,
    private agencyService: AgencyService,
    private alertMessageService: AlertMessageService,
    private alertService: AlertService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.createFormGroup();
    setTimeout(() => {
      this.showingObject = { ...this.inputObject };
      if (this.editFlag) {
        document.getElementById("AgencyCode").setAttribute("readonly", "true");
        this.infoMessage = "Update";
      }
      else {
        this.infoMessage = "Create";
      }
      console.log(this.regulationsList);
      console.log(this.listShowingAgency);
      console.log(this.listAgencyTypes);
    });
  }
  private createFormGroup() {
    this.agencyFormGroup = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        // Validators.pattern("^[a-zA-Z aàảãáạăằẳẵắặâầẩẫấậbcdđĐeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+$")
      ]),
      agencyName: new FormControl('', [
        Validators.required,
      ]),
      agencyType: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      districtCode: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      debt: new FormControl('', [
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

  onClickSave() {
    if (this.editFlag) {
      this.updateObject();
    }
    else {
      this.createObject();
    }
  }

  private createObject() {
    var numberAgencyOfThisDistrict = this.listShowingAgency.filter(x => x.maquan === this.inputObject.maquan).length;

    if (this.numberOfAgencyTypes >= parseInt(this.regulationsList.numberOfType) && !this.listAgencyTypes.includes(this.inputObject.maloaidaily)) {
      this.alertService.danger(`Số loại đại lý tối đa đã đạt giới hạn cho phép.`)
      return;
    }
    if (numberAgencyOfThisDistrict >= parseInt(this.regulationsList.numberOfAgencyPerType)) {
      this.alertService.danger(`Số lượng đại lý ở quận ${this.inputObject.maquan} đã đạt giới hạn cho phép.`)
      return;
    }

    this.agencyService.create(this.inputObject).subscribe(result => {
      if (result) {
        this.alertMessageService.alertShowing(result);
        if (result.responeStatus == 1) {
          this.confirmationEvent.emit(true);
        }
        else {
          this.confirmationEvent.emit(false);
        }
      }
    });
  }

  private updateObject() {
    //check if there are changed data
    if (JSON.stringify(this.inputObject) === JSON.stringify(this.showingObject)) {
      this.alertService.danger("Dữ liệu không thay đổi, vui lòng kiểm tra lại trước khi cập nhật.")
      return;
    }
    //dữ liệu có thay đổi, kiểm tra số loại đại lý 
    console.log(this.numberOfAgencyTypes);
    var numberAgencyOfThisDistrict = this.listShowingAgency.filter(x => x.maquan === this.inputObject.maquan).length;
    if (this.numberOfAgencyTypes >= parseInt(this.regulationsList.numberOfType) && !this.listAgencyTypes.includes(this.inputObject.maloaidaily)) {
      this.alertService.danger(`Số loại đại lý tối đa đã đạt giới hạn cho phép.`)
      return;
    }
    if (numberAgencyOfThisDistrict >= parseInt(this.regulationsList.numberOfAgencyPerType)) {
      this.alertService.danger(`Số lượng đại lý ở quận ${this.inputObject.maquan} đã đạt giới hạn cho phép.`)
      return;
    }

    this.agencyService.update(this.inputObject).subscribe(result => {
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
}
