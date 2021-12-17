import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formDataOut: any;
  public formData = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(private common: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.formData.get('name')?.valid);
  }
  public onSubmit(): void {
    // console.log('Submit form: formData = ',this.formData)
    // this.common.submitData(this.formData.value);
    // this.common.submitData({ name: this.formData.value.name, age: 12 });
    // console.log(this.formData);
  }
}
