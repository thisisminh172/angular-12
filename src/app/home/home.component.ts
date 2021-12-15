import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Minh Le';
  public age = 20;
  public fruits = ['tao', 'nho', 'cam', 'quit', 'xoai', 'oi'];
  public fruits2 = [
    { ten: 'Tao', gia: 12, haGia: true },
    { ten: 'Nho', gia: 30, haGia: false },
    { ten: 'Cam', gia: -4, haGia: false },
    { ten: 'Quit', gia: 40, haGia: true },
  ];
  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay = ', this.fruits);
  }
}
