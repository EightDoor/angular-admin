import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALAIN_CONFIG, AlainConfig } from '@delon/util';

const alainConfig: AlainConfig = {
  sf: {

  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ALAIN_CONFIG,
      useValue: alainConfig,
    }
  ]
})
export class GlobalConfigModule { }
