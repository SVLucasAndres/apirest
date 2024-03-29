import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';
import { PokeapiService } from '../Services/apiservice.service';
import { AppComponent } from '../app.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  HttpClientModule
  ],
  declarations: [HomePage],
  providers:[PokeapiService],
  bootstrap:[AppComponent]
})
export class HomePageModule {}
