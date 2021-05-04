import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      username: {
        type: 'string',
        title: "用户名",
      },
    },
    required: ["username"]
  }


  constructor() { }

  ngOnInit(): void {
    console.log(123);
  }
  submit(value:any) {
    console.log(value);
  }
}
