import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(protected http: HttpClient) {}
  private readonly base_url: string = "http://localhost:3000";

  protected httpGet(url: string, options?: any): Observable<any> {
    return this.http
      .get(this.base_url + url, {
        ...options,
      })
      .pipe();
  }

  protected httpPost(url: string, body?: any, options?: any): Observable<any> {
    return this.http
      .post(this.base_url + url, body, {
        ...options,
      })
      .pipe();
  }

  protected httpPut(url: string, body?: any, options?: any): Observable<any> {
    return this.http
      .put(this.base_url + url, body, {
        ...options,
      })
      .pipe();
  }

  protected httpDelete(url: string, options?: any): Observable<any> {
    return this.http
      .delete(this.base_url + url, {
        ...options,
      })
      .pipe();
  }
}
