import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  private jsStorage: object;
  constructor() {
    this.jsStorage = {};
  }

  getStorage(key, isObject = false) {
    if (this.jsStorage[key] && key !== "AUTH_TOKEN") {
      return this.jsStorage[key];
    } else {
      let c = localStorage.getItem(key);
      if (isObject) {
        try {
          return JSON.parse(c);
        } catch (error) {
          return undefined;
        }
      } else {
        return c;
      }
    }
  }

  setStorage(key, value, useBrowserStorage = false, isObject = false) {
    this.jsStorage[key] = value;
    if (useBrowserStorage) {
      if (isObject) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
    }
  }

  unsetStorage(key) {
    delete this.jsStorage[key];
    localStorage.removeItem(key);
  }

  flushStorage() {
    localStorage.clear();
    sessionStorage.clear();
    this.jsStorage = {};
  }
}
