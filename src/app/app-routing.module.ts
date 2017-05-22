import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { LoginComponent }   from '@app/login';
import { PageNotFoundComponent }   from '@app/page-not-found';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
