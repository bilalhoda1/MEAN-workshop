import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  circleBgColor: string;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.$circleElementColor
      .subscribe((value) => {
        this.circleBgColor = value;
      });
  }

}