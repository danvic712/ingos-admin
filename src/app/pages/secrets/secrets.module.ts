import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretsRoutingModule } from './secrets-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecretsRoutingModule
  ]
})
export class SecretsModule { }
