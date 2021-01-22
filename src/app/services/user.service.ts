import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class UserService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  private logger = new Subject<boolean>();

  setUserStorage(infos: any) {
    localStorage.setItem("user", JSON.stringify(infos));
    this.logger.next(true);
  }

  getUserStorage() {
    let user = localStorage.getItem("user");
    return JSON.parse(user);
  }
  logOut() {
    localStorage.removeItem("user");
    this.logger.next(false);
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

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  add(body: any) {
    body.tickets = [];
    return this.httpPost(this.url, body);
  }

  edit(e: any) {
    return this.httpPut(this.url, e);
  }
}
