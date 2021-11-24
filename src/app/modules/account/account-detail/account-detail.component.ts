import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  account:Array<string>= [];

  form : FormGroup  = this.formBuilder.group({
    address: ''
  });
  constructor(private formBuilder:FormBuilder, private service: AccountService) {

  }

  ngOnInit(): void {
    console.log("account loaded");
  }

  onSubmit() {
    console.warn('Your address  has been submitted', this.form!.controls['address'].value);

    this.service.account('account/'+ this.form!.controls['address'].value).subscribe(response =>
    {
      console.log(JSON.stringify(response));
      this.account = response.data ;
    });
    this.form!.reset();
  }

}
