import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { StorageService } from "./storage.service";

@Injectable()
export class SessionService {
  tempData = {};
  constructor(
    private storage: StorageService,
    private readonly router: Router
  ) {
    this.getVirtualViewId();
  }

  getAuthToken() {
    let c = this.storage.getStorage("AUTH_TOKEN");
    this.isValidSession(c);
    return c;
  }

  setAuthToken(token) {
    return this.storage.setStorage("AUTH_TOKEN", token, true);
  }

  getOffice() {
    if (this.isVirtualView()) {
      return this.getSessionVirtualViewId();
    } else {
      return this.storage.getStorage("OFFICE_ID", true);
    }
  }

  setOffice(office) {
    return this.storage.setStorage("OFFICE_ID", office, true, true);
  }

  setUserInfo(info) {
    return this.storage.setStorage("USER_INFO", info, true, true);
  }

  getUserInfo() {
    let c = this.storage.getStorage("USER_INFO", true);
    this.isValidSession(c);
    return c;
  }

  setVirtualViewId(value) {
    this.storage.setStorage("VIRTUAL_VIEW", value, true, true);
    sessionStorage.setItem("VIRTUAL_VIEW", "0");
  }

  getVirtualViewId() {
    let c = this.storage.getStorage("VIRTUAL_VIEW");
    this.storage.unsetStorage("VIRTUAL_VIEW");
    if (c === null || c === undefined || c === "" || c === "0") {
      //sessionStorage.setItem("IS_VIRTUAL_WINDOW", "0");
    } else {
      //sessionStorage.setItem("IS_VIRTUAL_WINDOW", "1");
      this.setInSessionVirtualViewId(c);
    }
  }

  setInSessionVirtualViewId(value) {
    return sessionStorage.setItem("VIRTUAL_VIEW", value);
  }

  getSessionVirtualViewId() {
    let c = sessionStorage.getItem("VIRTUAL_VIEW");
    if (c === null || c === undefined || c === "" || c === "0") {
      return "0";
    } else {
      let c = sessionStorage.getItem("VIRTUAL_VIEW");
      if (c && c !== null && c !== "") {
        return JSON.parse(c);
      } else {
        return undefined;
      }
    }
  }

  isVirtualView() {
    let c = sessionStorage.getItem("VIRTUAL_VIEW");
    if (c === null || c === undefined || c === "" || c === "0") {
      return false;
    } else {
      return true;
    }
  }

  isValidSession(data) {
    // if (data === null || data === undefined || data === "") {
    //   //this.flushSession();
    //   if(this.router.url === '/public/dashboard'){
    //   }else{
    //     this.router.navigate(["login"]);
    //   }
    // }
  }

  isValidSession2() {
    let data = this.getAuthToken();
    if (data === null || data === undefined || data === "") {
      return false;
    } else {
      return true;
    }
  }

  setInstanceConfig(value) {
    return this.storage.setStorage("INSTANCE_CONFIG", value, true, true);
  }

  getInstanceConfig() {
    let data = this.storage.getStorage("INSTANCE_CONFIG", true);
    this.isValidSession(data);
    if (data) {
      return data;
    } else {
      return {};
    }
  }

  setTempJSStorage(key, value) {
    this.tempData[key] = value;
  }

  getTempJSStorage(key) {
    let c = this.tempData[key];
    delete this.tempData[key];
    return c;
  }

  flushSession() {
    this.storage.flushStorage();
  }

  // Multi Language

  getLanguage() {
    let c = this.storage.getStorage("MULTI_LANG");
    // this.isValidSession(c);
    return c;
  }

  public isLanguage() {
    return !!localStorage.getItem("MULTI_LANG");
  }

  setLanguage(lang) {
    return this.storage.setStorage("MULTI_LANG", lang, true);
  }
}
