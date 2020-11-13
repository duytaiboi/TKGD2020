import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiHost } from "../const/const";
import { ResponeModel } from "../model/response.model";

@Injectable()
export class AgencyService {

  private homeAddress = 'Agency';

  constructor(public httpClient: HttpClient) {
  }

  get(): Observable<ResponeModel> {
    return this.httpClient.get<ResponeModel>(`${apiHost}/${this.homeAddress}/LoadData`);
  }

  create(inputData):Observable<ResponeModel>{
    return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/Create`,inputData);
  }

  update(inputData):Observable<ResponeModel>{
    return this.httpClient.post<ResponeModel>(`${apiHost}/${this.homeAddress}/Update`,inputData);
  }

  

}
