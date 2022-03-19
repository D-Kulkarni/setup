import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor() {}

  numberMtoE(digit) {
    let p = "";
    let digits = digit.split("");
    digits.forEach((element) => {
      switch (element) {
        case "९":
        case "9":
          p += "9";
          break;
        case "८":
        case "8":
          p += "8";
          break;
        case "७":
        case "7":
          p += "7";
          break;
        case "६":
        case "6":
          p += "6";
          break;
        case "५":
        case "5":
          p += "5";
          break;
        case "४":
        case "4":
          p += "4";
          break;
        case "३":
        case "3":
          p += "3";
          break;
        case "२":
        case "2":
          p += "2";
          break;
        case "१":
        case "1":
          p += "1";
          break;
        case "०":
        case "0":
          p += "0";
          break;
      }
    });
    return p;
  }
}
