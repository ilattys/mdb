import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SlashesComponent } from './slashes/slashes.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    SlashesComponent,
    FullScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
