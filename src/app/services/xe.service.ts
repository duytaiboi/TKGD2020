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

  search() {
    return this.httpGet(this.url);
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
