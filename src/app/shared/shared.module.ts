import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [
    SlideBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
