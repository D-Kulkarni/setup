import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pinValueExtractor",
})
export class ValueExtractorPipe implements PipeTransform {
  transform(rowData: any, ...args: any[]): any {
    let returnValue = "";
    let col = args[0];
    if (Array.isArray(col.field)) {
      col.field.forEach((element) => {
        let keyArray = element.split(".");
        returnValue += ` ${this.extractValue(keyArray, rowData)}`;
      });
    } else {
      let keyArray = col.field.split(".");
      returnValue += ` ${this.extractValue(keyArray, rowData)}`;
    }
    return returnValue;
  }

  extractValue(keyArray, rowData) {
    let returnValue = "";
    if (rowData) {
      let returnValue = rowData;
      keyArray.forEach((element) => {
        if (returnValue) {
          returnValue = returnValue[element];
        } else {
          returnValue = "--";
        }
      });
      return returnValue;
    } else {
      return returnValue;
    }
  }
}
