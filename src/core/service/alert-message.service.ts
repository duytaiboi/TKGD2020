import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponeModel, ResponeStatusEnum } from '../model/response.model';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class AlertMessageService {
    constructor(private alertService: AlertService) {
    }

    alertShowing(message:string,type:number) {
        if (type === 1) {
            this.alertService.success(message);
            console.log("tc");
        }
        else if (type === 2) {
            this.alertService.danger(message);
        }
    }
}
