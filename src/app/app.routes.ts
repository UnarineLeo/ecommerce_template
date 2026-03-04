import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.page').then((m) => m.ContactUsPage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./shop/shop.page').then((m) => m.ShopPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then((m) => m.CartPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.page').then((m) => m.OrdersPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage)
  },
];
