import { Router } from "@angular/router";
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Table } from "primeng/table";

import { EventConstants } from "../../constants/pin-table.constants";
import { TableConfig } from "./pin-table.interface";

@Component({
  selector: "pin-table",
  templateUrl: "./pin-table.component.html",
  styleUrls: ["./pin-table.component.scss"],
})
export class PinTableComponent implements OnInit, AfterContentInit {
  _data: any;
  @Input()
  get data(): any {
    return this._data;
  }
  set data(value: any) {
    this._data = value;
  }

  _config: TableConfig;
  @Input()
  get config(): TableConfig {
    return this._config;
  }
  set config(value: TableConfig) {
    this._config = value;
    if (value) {
      this.processConfig();
    }
  }

  _totalRecords: number;
  @Input()
  get totalRecords(): number {
    return this._data;
  }
  set totalRecords(value: number) {
    this._totalRecords = value;
  }

  @ViewChild("dt", { static: false }) dt: Table;

  @Output() onEvent = new EventEmitter();

  @ContentChild("rowActionTemplate", { static: false })
  rowActionTemplate: TemplateRef<any>;

  @ContentChild("rowExpandTemplate", { static: false })
  rowExpandTemplate: TemplateRef<any>;

  @ContentChildren(TemplateRef, { descendants: true }) templateRef: QueryList<
    TemplateRef<any>
  >;

  unsetButton: boolean = false;
  customColumnTemplatesArray: any = {};
  startIndex: number;
  endIndex: number;
  allFields: any[];
  sortableColumns: any[];
  selectedData;
  loading: boolean;
  pageSizeOptions: Array<number>;
  constructor(private router: Router) {}

  ngOnInit() {
    this.loading = true;
  }

  ngAfterViewInit() {
    this.templateRef.toArray().forEach((element: any, index) => {
      let customId = Object.keys(element._def.references)[0];
      if (customId && customId.length > 0) {
        this.customColumnTemplatesArray[
          Object.keys(element._def.references)[0]
        ] = element;
      } else {
        this.customColumnTemplatesArray[`${index}`] = element;
      }
    });
  }

  ngAfterContentInit() {}

  processConfig() {
    if (!this._config.pageLinks) {
      this._config.pageLinks = 5;
    }
    this.pageSizeOptions = this._config.pagesSizes.map((element) => {
      return element.value;
    });
  }

  getSortableFields(field: string) {
    // if (!this.isSortableFieldsEmpty()) {
    //   if (this.sortableColumns.includes(field)) return field;
    //   else return ""
    // }
    // return "";
  }

  // checking if columns object has fields with sort set to -> true
  isSortableFieldsEmpty() {
    return true;
    //return _.isEmpty(this.sortableColumns);
  }

  // selectAll(event, data) {
  //   console.log(event);
  //   this.selectedAllData = data;
  //   console.log("All Selected : ", this.selectedData);
  // }

  // checking if column has a condition
  checkIfColumnHasCondition(field, data) {
    // let col = _.filter(this.config.columns, col => col.field == field && col.condition != "")[0];
    // if (col.condition == conditions.gt) {
    //   return data[field] > col.conditionValue;
    // }
    // if (col.condition == conditions.e) {
    //   return data[field] == col.conditionValue;
    // }
    // if (col.condition == conditions.gte) {
    //   return data[field] >= col.conditionValue;
    // }
    // if (col.condition == conditions.lt) {
    //   return data[field] < col.conditionValue;
    // }
    // if (col.condition == conditions.lte) {
    //   return data[field] <= col.conditionValue;
    // }
    // if (col.condition == conditions.ne) {
    //   return data[field] != col.conditionValue;
    // }
  }

  // Emmiting Page Change Event (Pagination)
  onPageChange(event) {
    this.onEvent.emit({
      name: EventConstants.PAGE_CHANGE,
      data: event,
    });
  }

  // Emmiting Event on Lazy Load;
  lazyLoadEvent($event) {
    this.onEvent.emit({
      name: EventConstants.LAZY_LOAD,
      data: this.data,
      event: $event,
    });
  }

  // Emmiting Sort Event
  customSort($event) {
    this.onEvent.emit({
      name: EventConstants.SORT,
      data: this.data,
      event: $event,
    });
  }

  // Emmiting Select event when a row is selected
  onRowSelect(event) {
    this.unsetButton = false;
    this.onEvent.emit({
      name: EventConstants.SELECT,
      data: this.selectedData,
      event,
    });
  }

  // Emmiting UnSelect event when a row is Un-selected
  onRowUnselect(event?: any) {
    if (event === undefined) {
      this.unsetButton = true;
    } else {
      this.unsetButton = false;
      this.onEvent.emit({
        name: EventConstants.UNSELECT,
        data: this.selectedData,
        event,
      });
    }
  }

  reset() {
    this.dt.reset();
  }

  getTranslatedHeader(header) {
    return `TableHeaders.${header}`;
  }
}
