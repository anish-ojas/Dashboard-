import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule} from  'primeng/card';
import {TableModule} from 'primeng/table';
import {KnobModule} from 'primeng/knob';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ChartModule} from 'primeng/chart';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    TableModule,
    KnobModule,
    ChartModule,
    RippleModule
  ]
})
export class DashboardModule { }
