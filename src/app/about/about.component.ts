import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  public myColor = 'red';
  public counter = 4;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.common.counter++;
    console.log(this.common.counter);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
  }
}
