import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** delon 配置 */
import { DelonFormModule } from '@delon/form';
import {DelonAuthModule, SimpleTokenModel} from '@delon/auth';

/** ng-zorro-antd 配置 */
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
registerLocaleData(zh);

@NgModule({
  declarations: [],
  providers: [
    { provide: NZ_I18N,
    useValue: zh_CN
    },
    // 指定认证风格对应的HTTP拦截器
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SimpleTokenModel,
      multi: true,
    }
  ],
  imports: [
    CommonModule,
    DelonFormModule.forRoot(),
    DelonAuthModule,
  ]
})
export class CoreModule { }