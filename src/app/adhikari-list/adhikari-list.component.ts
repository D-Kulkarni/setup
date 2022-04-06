import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { OverlayPanel } from "primeng/overlaypanel";

import { UtilityService } from "../../../app/shared/utility.service";
import { SessionService } from "../../common/services/session.service";
import { adhikariService } from "../service/api/adhikari.service";
import { GLOBAL_CONSTANT } from "../../common/constant/global.constant";

@Component({
  selector: "app-adhikari-list",
  templateUrl: "./adhikari-list.component.html",
  styleUrls: ["./adhikari-list.component.scss"],
})
export class AdhikariListComponent implements OnInit {
  @ViewChild("filter", { static: false }) filter: OverlayPanel;
  userRole: any;
  userRoleFlag: boolean = false;
  adhikariData: any;
  adhikariCount: Array<any>;
  departmentData: any;
  cols: any[];
  selectedRouteType: any;
  isPagination: boolean = true;
  genderTypes: any;
  totalCount: any;
  defaultPage: any;
  page: any;
  size: any;
  paginationCount: any;
  deleteData: any;
  dialougFlag: boolean = false;
  config: any;

  // Filter
  filterObj: any;
  filterFlag: boolean = false;
  department: any;
  gender: any;

  chartOptions = {
    title: {
      display: false,
      text: "My Title",
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80, //Here for innerRadius. It's already exists
    outerRadius: 100, //Here for outerRadius
  };

  constructor(
    private adhikariService: adhikariService,
    private ss: SessionService,
    private toast: MessageService,
    private router: Router,
    private us: UtilityService
  ) {
    this.genderTypes = GLOBAL_CONSTANT.GENDER_TYPES;
    this.adhikariData = [];
    this.defaultPage = {
      page: {
        number: 0,
        size: this.size,
      },
    };
    this.clearFilter();
  }

  getAdhikariList(filter) {
    this.adhikariService.getAdhikariData(filter).subscribe((data) => {
      this.adhikariData = data[0];
      this.paginationCount = data[1];
    });
  }

  //   total Count
  getTotalCount() {
    this.adhikariService.getTotalCount().subscribe((res: any) => {
      this.totalCount = res;
    });
  }
  opendialoug(obj) {
    this.dialougFlag = true;
    this.deleteData = obj;
  }

  //soft Delete Call
  deleteRecord(adhikariData) {
    adhikariData.recordStatus = "DELETED";
    this.adhikariService.updateData(adhikariData).subscribe((res) => {
      this.dialougFlag = false;
      this.toast.add({
        severity: "error",
        summary: "Deleted Successfully",
        detail: "Adhikari Entry Deleted successfully !!!",
      });
    });
  }

  getDept() {
    this.adhikariService.getDepartment().subscribe((res: any) => {
      this.departmentData = res;
    });
  }

  editAdhikari(adhikariData) {
    let adhikariId = adhikariData ? adhikariData.id : null;
    this.router.navigate(["/adhikari/edit/" + adhikariId]);
  }

  getPageConfig() {
    this.adhikariService.getPageConfig().subscribe((res) => {
      this.config = res;
    });
  }

  handleEvent(event) {
    if (event.name == "LAZY_LOAD") {
      this.page = this.us.PaginationPerPage(event.event);
      this.defaultPage.page.size = event.event.rows;

      if (this.filterFlag) {
        this.filterObj.page = this.page;
        this.getAdhikariList(this.filterObj);
      } else {
        this.getAdhikariList({ page: this.page });
      }
    }
  }

  // Filter Data
  clearFilter() {
    this.filterObj = {
      gender: undefined,
      department: undefined,
    };
    this.gender = undefined;
    this.department = undefined;
  }

  setFilterObject() {
    this.clearFilter();
    this.getAdhikariList(this.defaultPage);
    this.filterFlag = false;
  }

  Filter(event, overlaypanel: OverlayPanel) {
    overlaypanel.toggle(event);
  }

  handelSubmit() {
    this.filterFlag = true;
    if (this.department !== undefined) {
      this.filterObj.department = this.department;
    } else {
      this.filterObj.department = "";
    }
    if (this.page !== undefined) {
      this.filterObj.page = this.page;
    } else {
      this.filterObj.page = "";
    }
    this.getAdhikariList(this.filterObj);
    this.filter.hide();
  }

  ngOnInit() {
    this.userRole = this.ss.getUserInfo();
    if (this.userRole.role == "SUPER_ADMIN") {
      this.userRoleFlag = true;
    }
    this.getPageConfig();
    this.getDept();
    this.getTotalCount();
  }
}
