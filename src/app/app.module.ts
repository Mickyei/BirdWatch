import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BirdModalPage } from './bird-modal/bird-modal.page';
import { BirdModalPageModule } from './bird-modal/bird-modal.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent, BirdModalPage],
  entryComponents: [BirdModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(),
          AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
