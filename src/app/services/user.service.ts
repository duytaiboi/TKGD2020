import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class UserService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  private readonly url: string = "/users";

  login(input: any): any {
    const sdt = input.sdt.toLocaleDateString();
    const matKhau = input.matKhau;
    return this.httpGet(
      this.url + `?sdt=${sdt}&matKhau=${matKhau}`
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
