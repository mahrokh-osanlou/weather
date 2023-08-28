import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorLogService {
  $LogList = new BehaviorSubject<any[]>([]);

  addLog(error : any) {
    if (!!localStorage.getItem('log')) {
      const list = JSON.parse(localStorage.getItem('log') ?? '');
      list.push(error);
      this.$LogList.next(list);
    } else {
      this.$LogList.next([error]);
    }
    localStorage.setItem('log', JSON.stringify(this.$LogList.value));
  }
}
