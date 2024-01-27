import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (!navigator.geolocation) {
  alert('Navegador no Soporta la Geolocation.');
  throw new Error('Navegador no Soporta la Geolocation.');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
