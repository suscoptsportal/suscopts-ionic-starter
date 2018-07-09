import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Defaults } from "../model/Config";
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class GeneralService {
  private Token: string = null

  constructor(public http: Http, public lss: LocalStorageService) {}

  getBasicPost(): any {
    let head = new Headers()
    head.append("Authorization", "Basic " + Defaults["basic"])
    //head.append("Content-Type", "application/x-www-form-urlencoded");
    head.append("Content-Type", "application/json")
    return { headers: head }
  }
  /// General Login
  login(email: string, password: string): Observable<any> {
    return this.http
      .post(
        Defaults["api"] + "/login/",
        { email: email, password: password },
        this.getBasicPost()
      )
      .map((res: Response) => res.json())
      .do(x => {
        if (x["status"] == "success") {
          this.lss.LoginUser(x["token"], x["name"])
          return { status: "success", message: "Welcome " + x["name"] }
        } else {
          return x
        }
      })
      .catch(this.handleError)
  }

  /*
   Limit to going members to church.
   All for any possible congregation and Main core members.
   http://suscoptsapi.stmary.info/login/[all | main]/[churches_id]/

  */

  // login(email: string, password: string): Observable<any> {
  //   return this.http
  //     .post(
  //       `${Defaults["api"]}/login/all/${Defaults["churchid"]}`,
  //       { email: email, password: password },
  //       this.getBasicPost()
  //     )
  //     .map((res: Response) => res.json())
  //     .do(x => {
  //       if (x["status"] == "success") {
  //         this.lss.LoginUser(x["token"], x["name"])
  //         return { status: "success", message: "Welcome " + x["name"] }
  //       } else {
  //         return x
  //       }
  //     })
  //     .catch(this.handleError)
  // }

  /*
  Limit to group
  http://suscoptsapi.stmary.info/login/group/[group_id]/
  */

  // login(email: string, password: string): Observable<any> {
  //   return this.http
  //     .post(
  //       `${Defaults["api"]}/login/group/${Defaults["groupid"]}`,
  //       { email: email, password: password },
  //       this.getBasicPost()
  //     )
  //     .map((res: Response) => res.json())
  //     .do(x => {
  //       if (x["status"] == "success") {
  //         this.lss.LoginUser(x["token"], x["name"])
  //         return { status: "success", message: "Welcome " + x["name"] }
  //       } else {
  //         return x
  //       }
  //     })
  //     .catch(this.handleError)
  // }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
        ? `error.status - error.statusText`
        : "Server error"
    console.error(errMsg) // log to console instead
    this.lss.LogoutUser()
    return Observable.throw(errMsg)
  }
}
