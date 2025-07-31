import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}},
    provideMomentDateAdapter({
      parse:{
        dateInput:['DD-MM-YYYY']
      },
      display: {
        dateInput:'DD-MM-YYYY',
        monthYearLabel:'MMM-YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    })
    
    
  ]
};
