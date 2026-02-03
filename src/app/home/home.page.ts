import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonCardContent, IonButton, IonSelect, 
 IonSelectOption, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UniversityListComponent } from '../university-list/university-list.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, CommonModule, FormsModule, IonIcon, 
    IonButton, IonSelect, IonSelectOption, IonCardSubtitle, IonCardTitle, IonCardHeader, UniversityListComponent,
    FooterComponent],
})
export class HomePage implements OnInit, OnDestroy {
  // Counter properties
  currentUniversities: number = 0;
  currentStudents: number = 0;
  currentSuccessRate: number = 0;
  targetUniversities: number = 26;
  targetStudents: number = 10;
  targetSuccessRate: number = 95;
  private animationInterval: any;

  // Search properties
  searchQuery: string = '';
  selectedField: string = '';
  selectedProvince: string = '';

  // Study Fields Array
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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.animateCounters();
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  animateCounters() {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    this.animationInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      this.currentUniversities = Math.floor(this.targetUniversities * easeProgress);
      this.currentStudents = Math.floor(this.targetStudents * easeProgress);
      this.currentSuccessRate = Math.floor(this.targetSuccessRate * easeProgress);

      if (currentStep >= steps) {
        this.currentUniversities = this.targetUniversities;
        this.currentStudents = this.targetStudents;
        this.currentSuccessRate = this.targetSuccessRate;
        clearInterval(this.animationInterval);
      }
    }, stepDuration);
  }

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

  startApplication() {
    console.log('Starting application');
    // Navigate to application page
  }

  exploreUniversities() {
    this.router.navigate(['/tabs/universities']);
  }

  // Helper method to get label from value
  getFieldLabel(value: string): string {
    const field = this.studyFields.find(f => f.value === value);
    return field ? field.label : '';
  }

  getProvinceLabel(value: string): string {
    const province = this.provinces.find(p => p.value === value);
    return province ? province.label : '';
  }

  // Method to clear all filters
  clearFilters() {
    this.searchQuery = '';
    this.selectedField = '';
    this.selectedProvince = '';
  }

  moreinfo = [
    {
      icon: 'heart',
      title: 'Centralized Applications',
      description: 'Learn more about Unipply and our mission to connect students with universities.'
    },
    {
      icon: 'help-circle',
      title: 'Smart University Matching',
      description: 'Get assistance with your university applications and other inquiries.'    
    },
    {
      icon: 'document-text',
      title: 'Real-time Tracking',
      description: 'Access guides, articles, and tools to help you navigate the university application process.'
    },
    { 
      icon: 'megaphone',
      title: 'Document Verification',
      description: 'Stay updated with the latest news and announcements from Unipply.'
    },
    {
      icon: 'people',
      title: 'Expert Guidance',
      description: 'Join our community of students and share your experiences and tips.'
    },
    {
      icon: 'settings',
      title: 'Secure & Trusted',
      description: 'Manage your account settings and preferences.'
    }
  ]

}