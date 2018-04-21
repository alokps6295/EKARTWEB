import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import {ApiService} from '../services/apiService';

@NgModule({
  imports: [      
    BrowserModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ], 
  providers: [
ApiService
  ]
})
export class AuthModule { }