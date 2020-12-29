import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class VeService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  private readonly url: string = "/ve";
  private readonly url_ve_da_dat: string = "/ve_da_dat";

  tim_ve(ma_ve: string, sdt_kh: string) {
    return this.httpGet(
      this.url_ve_da_dat + `?ma_ve=${ma_ve}&sdt_kh=${sdt_kh}`
    );
  }

  get(id: string) {
    return this.get(this.url + `/${id}`);
  }
  add(body: any) {
    return this.httpPost(this.url, body);
  }

  edit(e: any) {
    return this.httpPut(this.url, e);
  }
}
