import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import universitiesData from '../university-list/university-list.json';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton,
 } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IonSelectOption } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

type University = {
  id: number;
  name: string;
  suburb: string;
  province: string;
  logo: string;
  fields: string[];
  image: string;
  students: number;
  rating: number;
  openingDate: string;
  closingDate: string;
  link: string;
};

@Component({
  selector: 'app-universities',
  templateUrl: 'universities.page.html',
  styleUrls: ['universities.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonButton, FormsModule],
})
export class Universities {
  featuredUniversities: University[] = (universitiesData as University[])

  searchQuery: string = '';
  selectedField: string = '';
  selectedProvince: string = '';

  // Provinces Array
  provinces = [
    { value: '', label: 'All Provinces' },
    { value: 'western-cape', label: 'Western Cape' },
    { value: 'gauteng', label: 'Gauteng' },
    { value: 'kwazulu-natal', label: 'KwaZulu-Natal' },
    { value: 'eastern-cape', label: 'Eastern Cape' },
    { value: 'free-state', label: 'Free State' },
    { value: 'limpopo', label: 'Limpopo' },
    { value: 'mpumalanga', label: 'Mpumalanga' },
    { value: 'north-west', label: 'North West' },
    { value: 'northern-cape', label: 'Northern Cape' }
  ];
  
  constructor(private router: Router,
    private alertController: AlertController) {}

   formatPrograms(fields: string[]): string {
    return fields
      .map(field => this.getFieldLabel(field) || field.replace(/-/g, ' '))
      .map(label => label.replace(/\b\w/g, char => char.toUpperCase()))
      .join(', ');
  }

  getFieldLabel(value: string): string {
    const field = this.studyFields.find(f => f.value === value);
    return field ? field.label : '';
  }

  studyFields = [
    { value: '', label: 'All Fields' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medicine', label: 'Medicine & Health Sciences' },
    { value: 'business', label: 'Business & Commerce' },
    { value: 'law', label: 'Law' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'science', label: 'Natural Sciences' },
    { value: 'social', label: 'Social Sciences' },
    { value: 'education', label: 'Education' },
    { value: 'it', label: 'Information Technology' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'architecture', label: 'Architecture & Built Environment' }
  ];

    searchUniversities() {
    // Validate that at least one search criteria is provided
    if (!this.searchQuery && !this.selectedField && !this.selectedProvince) {
      this.showAlert('Please enter a search term or select filters');
      return;
    }

    console.log('Searching universities:', {
      query: this.searchQuery,
      field: this.selectedField,
      province: this.selectedProvince
    });

    // Navigate to universities page with search params
    this.router.navigate(['/tabs/universities'], {
      queryParams: {
        q: this.searchQuery || undefined,
        field: this.selectedField || undefined,
        province: this.selectedProvince || undefined
      }
    });
  }

  async showAdvancedFilters() {
    const alert = await this.alertController.create({
      header: 'Advanced Filters',
      message: 'Advanced filtering options coming soon! Filter by tuition fees, acceptance rates, programs, and more.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Search',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
