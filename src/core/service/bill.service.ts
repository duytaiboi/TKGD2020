import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiHost } from "../const/const";
import { ResponeModel } from "../model/response.model";

@Injectable()
export class BillService {

    private homeAddress = 'Bill';

    constructor(public httpClient: HttpClient) {
    }
    getAgencyBill(agencyId): Observable<ResponeModel> {
        return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/LoadData`, agencyId);
    }

    getInvoiceDetail(maPhieuXuat): Observable<ResponeModel> {
        return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/LoadInvoiceData`, maPhieuXuat);
    }

    createInvoice(inputData): Observable<ResponeModel> {
        return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/CreateInvoice`, inputData);
    }

    createBill(inputData): Observable<ResponeModel> {
        return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/CreateBill`, inputData);
    }
}