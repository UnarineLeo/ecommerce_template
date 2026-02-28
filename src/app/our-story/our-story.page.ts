import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-our-story',
  templateUrl: 'our-story.page.html',
  styleUrls: ['our-story.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurStoryPage {

  constructor() {}

}
