// import { Directive, ElementRef, Input, OnInit } from "@angular/core";
// import * as _ from "underscore";

// import { SessionService } from "./../../common/services/session.service";

// //import * as _ from "underscore"
// @Directive({
//   selector: "[appMenuPermission]",
// })
// export class MenuPermissionDirective implements OnInit {
//   @Input("appMenuPermission") menu: any;

//   exlcudeVirtualView = [
//     "OFFICE",
//     "ADVERTISEMENT",
//     "VOTER_SEARCH",
//     "MANAGE_VIEWER",
//     "KIOSK",
//     "MLA_FUND_MGMT",
//     "SUPERADMIN_CREATE",
//     "IMPORT_VOTER_DATA",
//     "PUBLIC_ENQUIRY",
//   ];
//   exlcudeViewerView = [
//     "ADVERTISEMENT",
//     "VOTER_SEARCH",
//     "MANAGE_VIEWER",
//     "KIOSK",
//     "MLA_FUND_MGMT",
//     "SUPERADMIN_CREATE",
//     "IMPORT_VOTER_DATA",
//     "PUBLIC_ENQUIRY",
//   ];

//   excludeForsuperAdmin = ["SUPERADMIN_CREATE", "IMPORT_VOTER_DATA"];

//   exlcudeKaryaKartaView = [
//     "OFFICE",
//     "ADVERTISEMENT",
//     "KIOSK",
//     "REPOSITORY",
//     "MANAGE_VIEWER",
//     "CALL_LOGS",
//     "SCHEDULE_BOOK",
//     "VOTER_SEARCH",
//     "ADHIKARI",
//     "DUARA",
//     "VIKASKAME",
//     "CONNECTOR",
//     "REGISTER_BOOK",
//     "VISITORS",
//     "KARYAKARTAS",
//     "MLA_FUND_MGMT",
//     "SUPERADMIN_CREATE",
//     "IMPORT_VOTER_DATA",
//     "PUBLIC_ENQUIRY",
//   ];
//   exlcudeOfficeAdminView = [
//     "MANAGE_VIEWER",
//     "MLA_FUND_MGMT",
//     "SUPERADMIN_CREATE",
//     "IMPORT_VOTER_DATA",
//   ];

//   constructor(private el: ElementRef, private readonly ss: SessionService) {}
//   ngOnInit() {
//     let isVirtualView = this.ss.isVirtualView();
//     let userInfo = this.ss.getUserInfo();

//     if (isVirtualView) {
//       if (_.contains(this.exlcudeVirtualView, this.menu.key))
//         this.hideElement();
//       return;
//     }

//     if (userInfo && userInfo.role === "KARYA_KARTA") {
//       if (_.contains(this.exlcudeKaryaKartaView, this.menu.key))
//         this.hideElement();
//       return;
//     }

//     if (userInfo && userInfo.role === "VIEWER") {
//       if (_.contains(this.exlcudeViewerView, this.menu.key)) this.hideElement();
//       return;
//     }

//     if (userInfo && userInfo.role === "OFFICE_ADMIN") {
//       if (_.contains(this.exlcudeOfficeAdminView, this.menu.key))
//         this.hideElement();
//       return;
//     }

//     if (userInfo && userInfo.role === "SUPER_ADMIN") {
//       if (_.contains(this.excludeForsuperAdmin, this.menu.key))
//         this.hideElement();
//       return;
//     }
//   }

//   private hideElement() {
//     this.el.nativeElement.style.display = "none";
//   }
// }
