import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  globalSearchName = new BehaviorSubject({});
  selectedLang = new BehaviorSubject("");
  constructor() {}
}
