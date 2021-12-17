import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public name = '';
  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  public submitForm(): void {
    // console.log('submit form : name = ' + this.name);

    // this.common.submitData(this.name);
    this.common.submitData({ name: this.name, age: 12 });
  }
}
