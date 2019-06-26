import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services';
import { LoginPage } from './pages/passport/login/login.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginPage],
  entryComponents: [
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ServicesModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
