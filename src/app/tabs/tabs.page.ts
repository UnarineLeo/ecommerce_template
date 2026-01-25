import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonList, IonIcon, IonButtons, IonButton, IonTitle, IonToolbar, IonHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonButtons, IonList, IonButton, IonTitle, IonToolbar, IonHeader, IonLabel, IonItem],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    // addIcons({ triangle, ellipse, square });
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
