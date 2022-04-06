import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pinTableNoValue",
})
export class PinTableNoValuePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (
      value == undefined ||
      value == null ||
      value == "" ||
      value == "null" ||
      value == "undefined"
    ) {
      return "--";
    }
    return value;
  }
}
