import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { BehaviorComponent } from './behavior/behavior.component';


@NgModule({
  declarations: [BehaviorComponent],
  imports: [
    CommonModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
