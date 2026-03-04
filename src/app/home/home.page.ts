import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CATEGORY_SECTIONS, CategorySection, getDiscountPercent, ProductItem } from '../shared/product-catalog';

interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, FooterComponent],
})
export class HomePage implements OnInit, OnDestroy {
  readonly heroSlides: HeroSlide[] = [
    {
      title: 'Fresh Arrivals for Everyday Living',
      subtitle: 'Shop the latest picks at great prices with fast checkout.',
      cta: 'Shop Now',
    },
    {
      title: 'Seasonal Deals You Will Love',
      subtitle: 'Save more on trending products across all categories.',
      cta: 'View Deals',
    },
    {
      title: 'Everything in One Storefront',
      subtitle: 'From fashion to electronics, discover your next favorite item.',
      cta: 'Browse Categories',
    },
  ];

  readonly categorySections: CategorySection[] = CATEGORY_SECTIONS;

  currentSlideIndex = 0;
  private carouselTimer: ReturnType<typeof setInterval> | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
  }

  prevSlide(): void {
    const max = this.heroSlides.length;
    this.currentSlideIndex = (this.currentSlideIndex - 1 + max) % max;
    this.restartAutoplay();
  }

  nextSlide(): void {
    const max = this.heroSlides.length;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % max;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.restartAutoplay();
  }

  formatRand(amount: number): string {
    return `R${amount.toFixed(2)}`;
  }

  getDiscountPercent(item: ProductItem): number {
    return getDiscountPercent(item);
  }

  openItem(itemId: number): void {
    this.router.navigate(['/tabs/item', itemId]);
  }

  addToCart(item: ProductItem, event: Event): void {
    event.stopPropagation();

    const cartRaw = localStorage.getItem('cart-items');
    const cartItems = cartRaw ? JSON.parse(cartRaw) as Array<{ id: number; qty: number }> : [];
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cartItems.push({ id: item.id, qty: 1 });
    }

    localStorage.setItem('cart-items', JSON.stringify(cartItems));
  }

  pauseAutoplay(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = null;
    }
  }

  resumeAutoplay(): void {
    if (!this.carouselTimer) {
      this.startAutoplay();
    }
  }

  private startAutoplay(): void {
    this.carouselTimer = setInterval(() => {
      this.nextSlide();
    }, 4500);
  }

  private restartAutoplay(): void {
    this.pauseAutoplay();
    this.startAutoplay();
  }
}
