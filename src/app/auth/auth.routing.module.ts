import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [{
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
