import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/admin';


const adminRoutes: Routes = [
  {
    path: 'admin',  component: AdminComponent,
    children: [
      //{ path: 'test', component: TestComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
