import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if ((window as any)['cordova']) { 
  document.addEventListener('deviceready', bootstrap, false);
} else {
  enableProdMode();
  bootstrap();
}
