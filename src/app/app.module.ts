import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { RoutingModule } from './routing.module';
import { ApiService } from './services/apiService';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpModule,
    AuthModule,
    SharedModule,
    RoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
