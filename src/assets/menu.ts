// import { Component, EventEmitter, OnInit, Output } from "@angular/core";
// import { Router } from "@angular/router";
// import { TranslateService } from "@ngx-translate/core";
// import { SessionService } from "../../common/services/session.service";
// import { SubjectService } from "./../../common/services/subject.service";


// @Component({
//   selector: "app-menu",
//   templateUrl: "./menu.component.html",
//   styleUrls: ["./menu.component.scss"],
// })
// export class MenuComponent implements OnInit {
//   MenuItem = [];
//   mobileMenuItem = [];
//   userInfo: any;
//   isVirtualView = false;
//   @Output() MenuToggler = new EventEmitter();
//   langObj = {
//     MCall: "Call",
//     MComplaints: "Complaints",
//     MConnector: "Connector",
//     MDashboard: "Dashboard",
//     MDevelopmentWork: "Development Work",
//     MImportVoterData: "Import Voter Data",
//     MKaryakarta: "Karyakarta",
//     MMLAFund: "MLA Fund",
//     MManageViewer: "Manage Viewer",
//     MOffice: "Office",
//     MOfficer: "Officer",
//     MPublicEnquiry: "Public Enquiry",
//     MRegister: "Register",
//     MSchedule: "Schedule",
//     MSuperAdminCreate: "Super Admin Create",
//     MVisitors: "Visitors",
//     MVoterSearch: "Voter Search",
//   };
//   constructor(
//     private sessionService: SessionService,
//     private router: Router,
//     private subSession: SubjectService,
//     public translate: TranslateService
//   ) {
//     this.subSession.selectedLang.subscribe((res: any) => {
//       this.translate.get("Menulist").subscribe((data: any) => {
//         this.langObj = data;
//         this.setMenus();
//       });
//     });
//   }

//   toggleSideBar() {
//     if (window.outerWidth < 897) {
//       this.MenuToggler.emit("mobile");
//     }
//     this.MenuToggler.emit("web");
//   }

//   menuClickHandle(menu) {
//     if (this.isVirtualView) {
//       let vv = this.sessionService.getSessionVirtualViewId();
//       if (vv.id === "ALL" && menu.label === "Dashboard") {
//         this.router.navigate(["/viewer-dashboard"]);
//         return;
//       }
//     }

//     if (
//       menu.label === "Dashboard" &&
//       this.userInfo &&
//       this.userInfo.role === "KARYA_KARTA"
//     ) {
//       this.router.navigate(["/karyakarta/dashboard"]);
//       return;
//     }
//     if (
//       menu.label === "Dashboard" &&
//       this.userInfo &&
//       this.userInfo.role === "VIEWER"
//     ) {
//       this.router.navigate(["/viewer-dashboard"]);
//       return;
//     }

//     this.router.navigate([menu.link]);
//   }

//   setMenus() {
//     let Menus = {
//       MENUS: [
      
//         {
//           key: "VIKASKAME",
//           label: this.langObj.MDevelopmentWork,
//           icon: "pi pi-pw pi-chart-bar",
//           link: "/vikas-kame/list",
//         },
//         {
//           key: "MLA_FUND_MGMT",
//           label: this.langObj.MMLAFund,
//           icon: "fa fa-fw fa-inr",
//           link: "/mla-fund-mgmt/list",
//         },
//         {
//           key: "CONNECTOR",
//           label: this.langObj.MConnector,
//           icon: "pi pi-pw pi-user-minus",
//           link: "/connector/list",
//         },
//         {
//           key: "KARYAKARTAS",
//           label: this.langObj.MKaryakarta,
//           icon: "pi pi-pw pi-user",
//           link: "karyakarta/list",
//         },
//         {
//           key: "ADHIKARI",
//           label: this.langObj.MOfficer,
//           icon: "pi pi-pw pi-user-plus",
//           link: "/adhikari/list",
//         },
     
//         {
//           key: "OFFICE",
//           label: this.langObj.MOffice,
//           icon: "pi pi-pw pi-briefcase",
//           link: "/office/list",
//         },
     
//         {
//           key: "VOTER_SEARCH",
//           label: this.langObj.MVoterSearch,
//           icon: "pi pi-pw pi-search",
//           link: "/voter/search",
//         },

//         {
//           key: "MANAGE_VIEWER",
//           label: this.langObj.MManageViewer,
//           icon: "pi pi-pw pi-eye",
//           link: "/user/viewer/list",
//         },
//         {
//           key: "SUPERADMIN_CREATE",
//           label: this.langObj.MSuperAdminCreate,
//           icon: "pi pi-pw pi-users",
//           link: "/super-admin",
//         },
//         {
//           key: "IMPORT_VOTER_DATA",
//           label: this.langObj.MImportVoterData,
//           icon: "pi pi-pw pi-upload",
//           link: "/import-voter",
//         },
//         {
//           key: "PUBLIC_ENQUIRY",
//           label: this.langObj.MPublicEnquiry,
//           icon: "pi pi-pw pi-user-plus",
//           link: "/enquiry/container",
//         },

//       ],
//     };
//     let mobileMenus = {
//       MENUS: [
//         {
//           key: "DASHBOARD",
//           label: "Dashboard",
//           icon: "pi pi-pw pi-home pi-th-large",
//           link: "/admin-dashboard",
//         },
//         {
//           key: "REGISTER_BOOK",
//           label: "Register Book",
//           icon: "pi pi-pw pi-briefcase",
//           link: "/register-book/list",
//         },
//         {
//           key: "SCHEDULE_BOOK",
//           label: "Schedule Book",
//           icon: "pi pi-pw pi-calendar",
//           link: "/shedule-book/list",
//         },
//         {
//           key: "CALL_LOGS",
//           label: "Call Logs",
//           icon: "pi pi-pw pi-comments",
//           link: "/call-log",
//         },
//         {
//           key: "COMPLAINTS",
//           label: "Complaints",
//           icon: "pi pi-pw pi-info-circle",
//           link: "/complain/list",
//         },
//         {
//           key: "VISITORS",
//           label: "Visitors",
//           icon: "pi pi-pw pi-users",
//           link: "/visitor/home",
//         },
//         {
//           key: "CONNECTOR",
//           label: "Connector",
//           icon: "pi pi-pw pi-user-minus",
//           link: "/connector/list",
//         },
//         {
//           key: "KARYAKARTAS",
//           label: "Karyakarta",
//           icon: "pi pi-pw pi-user",
//           link: "karyakarta/list",
//         },
//         {
//           key: "ADHIKARI",
//           label: "Adhikari",
//           icon: "pi pi-pw pi-user-plus",
//           link: "/adhikari/list",
//         },
//         {
//           key: "DUARA",
//           label: "Duara",
//           icon: "pi pi-pw pi-calendar-plus",
//           link: "duara/list",
//         },
//         {
//           key: "VIKASKAME",
//           label: "Vikas Kame",
//           icon: "pi pi-pw pi-chart-bar",
//           link: "/vikas-kame/list",
//         },
//         {
//           key: "OFFICE",
//           label: "Office",
//           icon: "pi pi-pw pi-briefcase",
//           link: "/office/list",
//         },
//         {
//           key: "VOTER_SEARCH",
//           label: "Voter Search",
//           icon: "pi pi-pw pi-search",
//           link: "/voter/search",
//         },
//         {
//           key: "MANAGE_VIEWER",
//           label: "Manage Viewer",
//           icon: "pi pi-pw pi-eye",
//           link: "/user/viewer/list",
//         },
//         {
//           key: "ADVERTISEMENT",
//           label: "Advertisement",
//           icon: "pi pi-pw pi-camera",
//           link: "/advertisement/list",
//         },
//         {
//           key: "SUPERADMIN_CREATE",
//           label: "Super Admin Create",
//           icon: "pi pi-pw pi-users",
//           link: "/super-admin",
//         },
//       ],
//     };
//     this.MenuItem = Menus.MENUS;
//     this.mobileMenuItem = mobileMenus.MENUS;
//   }

//   ngOnInit() {
//     this.userInfo = this.sessionService.getUserInfo();

//     this.isVirtualView = this.sessionService.isVirtualView();
//     this.setMenus();
//   }
// }
