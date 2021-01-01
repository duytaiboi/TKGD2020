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
    const reqUrl = input.username.includes("@")
      ? `?email=${input.username}&pw=${input.pw}`
      : `?numbers=${input.username}&pw=${input.pw}`;
    return this.httpGet(this.url + reqUrl);
  }

  get(id: string) {
    return this.httpGet(this.url + `/${id}`);
  }

  add(body: any) {
    body.tickets = [];
    return this.httpPost(this.url, body);
  }

  edit(e: any) {
    return this.httpPut(this.url, e);
  }
}
