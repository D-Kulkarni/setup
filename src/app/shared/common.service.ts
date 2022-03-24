import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

isoToStringDateConverterYYYYMMDD(dateString: any): string {
    var d = new Date(dateString);
    var day = this.pad(d.getUTCDate());
    var month = this.pad(d.getUTCMonth() + 1 );
    var year = this.pad(d.getUTCFullYear());
    return year + '-' + month + '-' + day;
}
isoToStringDateConverterdatePlus1(dateString: any): string {
    var d = new Date(dateString);
    var day = this.pad(d.getUTCDate() + 1 );
    var month = this.pad(d.getUTCMonth() + 1 );
    var year = this.pad(d.getUTCFullYear());
    return year + '/' + month + '/' + day;
}
isoToStringDateConverternewYYYYMMDD(dateString: any): string {
    var d = new Date(dateString);
    var day = this.pad(d.getUTCDate());
    var month = this.pad(d.getUTCMonth() + 1 );
    var year = this.pad(d.getUTCFullYear());
    return year + month + day;
}
isoToStringDateConverterYYYYMMDDNew(dateString: any): string {
    var d = new Date(dateString);
    var day = this.pad(d.getUTCDate()+ 1);
    var month = this.pad(d.getUTCMonth() + 1);
    var year = this.pad(d.getUTCFullYear());
    return year + '-' + month + '-' + day;
}
isoToStringDateConverterYYYYMMDSubtract(dateString: any): string {
    var d = new Date(dateString);
    var day = this.pad(d.getUTCDate()- 1);
    var month = this.pad(d.getUTCMonth() + 1);
    var year = this.pad(d.getUTCFullYear());
    return year + '-' + month + '-' + day;
}

pad(n:any) {
    return (n < 10 ? '0' : '') + n;
}
reformatDate(dateStr: string) {
    let dArr = dateStr.split("-");  // ex input "2010-01-18"
     return dArr[0] + "/" + dArr[1] + "/" + dArr[2]; //ex out: "2010/01/18"
 }
reformatDateToDash(dateStr: string) {
    let dArr = dateStr.split("/");  // ex input "2010/01/18"
     return dArr[0] + "-" + dArr[1] + "-" + dArr[2]; //ex out: "2010-01-18"
 }
}
