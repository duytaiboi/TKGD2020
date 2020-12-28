import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VeService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
}
