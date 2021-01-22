import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class XeService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  private readonly url: string = "/xe";

  timXe(input: any): any {
    const ngay_di = input.ngay_di.toLocaleDateString();
    const diem_di = input.diem_di;
    const diem_den = input.diem_den;
    return this.httpGet(
      this.url + `?ngay_di=${ngay_di}&diem_di=${diem_di}&diem_den=${diem_den}`
    );
  }

  getXe(id: string) {
    return this.httpGet(this.url + `/${id}`);
  }

  add(body: any) {
    return this.httpPost(this.url, body);
  }

  edit(e: any) {
    return this.httpPut(this.url + `/${e.id}`, e);
  }
}
