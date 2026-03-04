import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../shop/shop.page').then((m) => m.ShopPage),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('../shop/shop.page').then((m) => m.ShopPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../orders/orders.page').then((m) => m.OrdersPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('../contact-us/contact-us.page').then((m) => m.ContactUsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/tabs/home',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
