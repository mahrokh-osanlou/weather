import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeService implements OnDestroy {
  private ngUnsubscribe = new Subject();
  selectedLanguage: BehaviorSubject<any> = new BehaviorSubject({
    name: "En",
    icon: "../../../../../assets/images/language/us.svg",
    symbol: "en",
  });


  get language(): Observable<any> {
    return this.selectedLanguage.pipe(takeUntil(this.ngUnsubscribe));
  }

  constructor() {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.complete();
  }
}
