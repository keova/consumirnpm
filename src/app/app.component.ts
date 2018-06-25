import { Component, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BusquedaObservableService, BusquedaInterface } from 'itunes-ionic';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers: [{provide: 'BusquedaInterface', useClass: BusquedaObservableService}]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              @Inject('BusquedaInterface') private itunes_service:BusquedaInterface) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.itunes_service.busca("Shakira", 10).subscribe(
          ok => console.log(ok),
          ko => console.log(ko),
          () => console.log("completado")
        );
    });
  }
}

