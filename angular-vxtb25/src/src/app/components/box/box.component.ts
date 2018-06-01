import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  boxBgColor: string;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.$boxElementColor
      .subscribe((value) => {
        this.boxBgColor = value;
      });
  }

}