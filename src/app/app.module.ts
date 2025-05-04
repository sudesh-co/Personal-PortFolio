import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideBarComponent } from './shared/slide-bar/slide-bar.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideBarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
