import { Component, OnInit } from '@angular/core';
import * as SwaggerUI from 'swagger-ui';


@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.less']
})
export class SwaggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    SwaggerUI({
      domNode: document.getElementById('swagger-ui-item'),
      url: 'http://localhost:8080/openapi?format=json'
    });
  }

}
