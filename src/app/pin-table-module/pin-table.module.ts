import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
// import { MultiLangModule } from "../../multi-lang/multi-lang.module";

import { PinTableComponent } from "./components/pin-table/pin-table.component";
import { PinTableNoValuePipe } from "./pipes/pin-table-no-value.pipe";
import { ValueExtractorPipe } from "./pipes/value-extractor.pipe";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

@NgModule({
  declarations: [PinTableComponent, PinTableNoValuePipe, ValueExtractorPipe],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // MultiLangModule,
    TableModule,
    TranslateModule,
  ],
  exports: [PinTableComponent],
})
export class PinTableModule {}
