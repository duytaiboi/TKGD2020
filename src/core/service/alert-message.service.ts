import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponeModel, ResponeStatusEnum } from '../model/response.model';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class AlertMessageService {
    constructor(private alertService: AlertService) {
    }

    alertShowing(data: ResponeModel) {
        if (data.responeStatus === ResponeStatusEnum.Successed) {
            this.alertService.success(data.message);
        }
        else if (data.responeStatus === ResponeStatusEnum.Failed) {
            this.alertService.danger(data.message);
        }
        else if (data.responeStatus === ResponeStatusEnum.NotExisted) {
            this.alertService.danger(data.message);
        }
        else if (data.responeStatus === ResponeStatusEnum.Existed) {
            this.alertService.danger(data.message);
        }
    }
}
