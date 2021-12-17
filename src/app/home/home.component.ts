import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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
  public vietnamData = [
    {
      name: 'Chon thanh pho',
      district: ['Quan Huyen'],
    },
    {
      name: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      name: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      name: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  public districts: string[] = [];
  constructor(private common: CommonService) {}
  public changeCity(event: any): void {
    
    const city = event.target.value;
    if(!city){
      return;
    }
    //Cach 1
    // console.log('event ', city);
    // const search = this.vietnamData.filter((data) => data.name === city);
    // if (search && search.length >0) {
    //   this.districts = search[0].district;
    // }
    // Cachg 2
    this.districts = this.vietnamData.find(data => data.name === city)?.district || [];
  }
  public counter = 0;
  public counterBinhPhuong = 0;
  public ngOnInit(): void {
    console.log('Cities = ', this.vietnamData);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    
  }
}
