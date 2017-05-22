import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, AdminRoutingModule } from '@app/admin';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent],
  declarations: [AdminComponent]
})
export class AdminModule { }
