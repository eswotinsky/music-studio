import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { PoliciesComponent } from './policies/policies.component';
import { StudioComponent } from './studio/studio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'studio',
    component: StudioComponent
  },
  {
    path: 'policies',
    component: PoliciesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
