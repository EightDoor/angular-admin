import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {BaseLayoutComponent} from './base-layout.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule
  ]
})
export class LayoutModule { }
