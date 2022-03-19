import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  constructor(private spinner: NgxSpinnerService) {}

  startLoader() {
    this.spinner.show();
  }
  stopLoader() {
    this.spinner.hide();
  }
}
