import { Component, OnInit } from '@angular/core';
import { IonChip, IonIcon, IonCard, IonCardContent, IonCardHeader, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
  standalone: true,
  imports: [IonChip, IonIcon, IonCard, IonCardContent, IonCardHeader, IonButton]
})
export class UniversityListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  universityArray = [
    {
      name: 'University of Cape Town',
      suburb: 'Rondebosch',
      province: 'Western Cape',
      logo: 'assets/logos/uct-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science'],
      image: 'assets/icon/logo.jpg',
      students: 29000,
      rating: 1,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'University of the Witwatersrand',
      suburb: 'Braamfontein',
      province: 'Gauteng',
      logo: 'assets/logos/wits-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science'],
      image: 'assets/icon/logo.jpg',
      students: 36000,
      rating: 2,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'Stellenbosch University',
      suburb: 'Stellenbosch',
      province: 'Western Cape',
      logo: 'assets/logos/su-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science', 'agriculture'],
      image: 'assets/icon/logo.jpg',
      students: 32000,
      rating: 3,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'University of Pretoria',
      suburb: 'Hatfield',
      province: 'Gauteng',
      logo: 'assets/logos/upt-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science', 'education'],
      image: 'assets/icon/logo.jpg',
      students: 40000,
      rating: 4,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'University of KwaZulu-Natal',
      suburb: 'Pietermaritzburg',
      province: 'KwaZulu-Natal',
      logo: 'assets/logos/ukzn-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science'],
      image: 'assets/icon/logo.jpg',
      students: 45000,
      rating: 5,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'University of the Western Cape',
      suburb: 'Bellville',
      province: 'Western Cape',
      logo: 'assets/logos/uwc-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science', 'education'],
      image: 'assets/icon/logo.jpg',
      students: 25000,
      rating: 6,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    },
    {
      name: 'North-West University',
      suburb: 'Potchefstroom',
      province: 'North West',
      logo: 'assets/logos/nwu-logo.png',
      fields: ['engineering', 'medicine', 'business', 'law', 'arts', 'science', 'agriculture'],
      image: 'assets/icon/logo.jpg',
      students: 35000,
      rating: 7,
      openingDate: '2024-07-01',
      closingDate: '2024-09-30',
      link: ''
    }

  ];

  onApplyNow(link: string){

  }

  onLearnMore(universityName: string){

  }

}