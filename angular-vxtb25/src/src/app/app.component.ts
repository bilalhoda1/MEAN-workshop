import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  box:string;
  circle:string;
  constructor(private appService: AppService) {
  }

  changeBoxColor() {
    this.appService.$boxColorSubject.next(this.box);
  }

  changeCircleColor() {
    this.appService.$circleColorSubject.next(this.circle);
  }
}
