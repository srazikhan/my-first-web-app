import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { NgMaterialsModule } from 'src/app/widget-module/ng-materials/ng-materials.module';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgMaterialsModule
  ]
})
export class EmployeesModule { }
