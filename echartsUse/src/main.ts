import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideEchartsCore } from 'ngx-echarts';
import { echarts } from './app/core/echarts.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || []), provideEchartsCore({ echarts })],
}).catch((err) => console.error(err));
