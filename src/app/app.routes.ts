import { provideRouter, RouterConfig } from '@angular/router';
import {AdminRoutes} from './components/admin/admin.routes';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  ...AdminRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
