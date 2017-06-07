import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, AdminRoutingModule } from '@app/admin';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from '@app/widgets/charts/line-chart/line-chart.component';
import { RadarChartComponent } from '@app/widgets/charts/radar-chart/radar-chart.component';
import { HeaderComponent, SidebarComponent, NavbarMenuComponent, SidebarMenuComponent, ControlSidebarComponent } from '@app/pages/partials';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule
  ],
  exports: [AdminComponent],
  declarations: [
    AdminComponent,
    LineChartComponent,
    RadarChartComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarMenuComponent,
    NavbarMenuComponent,
    ControlSidebarComponent
  ]
})
export class AdminModule { }
