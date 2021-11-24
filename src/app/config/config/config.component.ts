import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Config } from '../config';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})
export class ConfigComponent implements OnInit {

  config: Config | undefined;

  form : FormGroup  = this.formBuilder.group({
    address: ''
  });
  constructor(private formBuilder:FormBuilder, private service: ConfigService) {

  }

  ngOnInit(): void {
  }

  showConfig() {
    this.service.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(data => {
        return this.config = {
          heroesUrl: (data as any).heroesUrl,
          textfile: (data as any).textfile,
          date: (data as any).date,
        };
      });

      console.log(JSON.stringify(this.config));
  }

}
