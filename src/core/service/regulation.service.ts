import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiHost } from "../const/const";
import { ResponeModel } from "../model/response.model";
import { RegulationModel } from "../model/regulation.model";

@Injectable()
export class RegulationService {

  private homeAddress = 'Regulation';

  constructor(public httpClient: HttpClient) {
  }

  getRegulation(): Observable<RegulationModel> {
    return this.httpClient.get<RegulationModel>(`${apiHost}/${this.homeAddress}/GetRegulation`);
  }
}
