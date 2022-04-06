// import { Directive, ElementRef, OnInit } from "@angular/core";
// import { SessionService } from "./../../common/services/session.service";

// @Directive({
//   selector: "[appActionPermission]",
// })
// export class ActionPermissionDirective implements OnInit {
//   constructor(private el: ElementRef, private readonly ss: SessionService) {}

//   ngOnInit() {
//     let isVirtualView = this.ss.isVirtualView();
//     let userInfo = this.ss.getUserInfo();
//     if (isVirtualView) {
//       this.el.nativeElement.style.visibility = "hidden";
//     } else if (
//       userInfo &&
//       (userInfo.role === "VIEWER" || userInfo.role === "KARYA_KARTA")
//     ) {
//       this.el.nativeElement.style.visibility = "hidden";
//     }
//   }
// }
