import { Component, ViewChild } from '@angular/core';
import { SFSchema } from '@delon/form';
import { RequestService } from '../../utils/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{
  schema: SFSchema = {
    properties: {
      username: {
        type: 'string',
        title: "用户名",
      },
      password: {
        type: 'string',
        title: "密码",
        ui: {
          type: 'password',
        }
      },
    },
    required: ["username", "password"]
  }


  constructor(private http: RequestService) { }

  submit(value:any) {
    console.log(value);
    this.http.post("auth/login", {}).subscribe((res)=>{
      console.log(res);
    })
  }
}
