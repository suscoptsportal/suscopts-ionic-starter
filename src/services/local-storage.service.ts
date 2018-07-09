import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { LoginPage } from '../pages/login/login';


@Injectable()
export class User {
    private token:string = "";
    private name: string = "";
    private status: number = 0;

    public setValues(token, name){
        this.token = token;
        this.name = name;
    }

    public setStatus(val:number){
      this.status = val;
    }

    public checkUser():boolean{
        return (this.token == "" || this.token === null) ? true:false;
    }

    public getToken(){
        return this.token;
    }

    public getName(){
        return this.name;
    }

    public getStatus(){
       return this.status;
    }

}

@Injectable()
export class LocalStorageService {

  private localUser:User = new User();
  private _token = new BehaviorSubject<string>("");
  private _name = new BehaviorSubject<string>("");  
  public loginPage: LoginPage;
  constructor() {
    if(localStorage.getItem("token") != "" && localStorage.getItem("name") != ""){
      this.localUser.setValues(localStorage.getItem("token"), localStorage.getItem("name"));
      this._token.next(this.localUser.getToken());
      this._name.next(this.localUser.getName());
    }
  }

  ngInit(){
  }

  LoginUser(token, name):User{
    //let user: User;
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    this.localUser.setValues(token, name);
    this._token.next(this.localUser.getToken());
    this._name.next(this.localUser.getName());
    return this.localUser;
  }

  LogoutUser(){
    //this.localUser.setValues("", "");
    this.localUser = new User();
    localStorage.setItem("token", '');
    localStorage.setItem("name", '');
    this._token.next('');
    this._name.next('');
    
  }

  token$ = this._token.asObservable();
  name$ = this._name.asObservable();

}

