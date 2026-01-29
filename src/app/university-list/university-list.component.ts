import { Component, OnInit } from '@angular/core';
import { IonChip, IonLabel, IonIcon, IonCard, IonCardContent, IonCardHeader, IonButton} from '@ionic/angular/standalone';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
  standalone: true,
  imports: [IonChip, IonLabel, IonIcon, IonCard, IonCardContent, IonCardHeader, IonButton, NgClass, NgFor]
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
      image: 'assets/images/uct-campus.jpg',
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
      image: 'assets/images/wits-campus.jpg',
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
      image: 'assets/images/su-campus.jpg',
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
      image: 'assets/images/upt-campus.jpg',
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
      image: 'assets/images/ukzn-campus.jpg',
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
      image: 'assets/images/uwc-campus.jpg',
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
      image: 'assets/images/nwu-campus.jpg',
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