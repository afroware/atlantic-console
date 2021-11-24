import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  accounts:Array<string>= [];

  from : FormGroup = this.formBuilder.group({});

  constructor(private formBuilder:FormBuilder, private service: AccountService) {

  }

  ngOnInit(): void {
    console.log("account loaded");
  }

  onSubmit() {
    console.log("ok");
    this.service.accounts('accounts').subscribe(response =>
    {
      console.log(JSON.stringify(response));
      this.accounts = response.data ;
    });
  }

}
