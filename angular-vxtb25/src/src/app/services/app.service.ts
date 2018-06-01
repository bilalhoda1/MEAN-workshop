import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class AppService {
  $boxColorSubject: BehaviorSubject<string> = new BehaviorSubject('#dcdcdc');
  $boxElementColor: Observable<string>;
  $circleColorSubject: BehaviorSubject<string> = new BehaviorSubject('#dcdcdc');
  $circleElementColor: Observable<string>;
  constructor() {
    this.$boxElementColor = this.$boxColorSubject.asObservable();
    this.$circleElementColor = this.$circleColorSubject.asObservable();
  }

}