import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import { GalleryComponent } from './components/gallery.component';
import { TeamComponent } from './components/team.component';
import { LocationComponent } from './components/location.component';
import { BookingComponent } from './components/booking.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    TeamComponent,
    LocationComponent,
    BookingComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-gallery></app-gallery>
      <app-team></app-team>
      <app-booking></app-booking>
      <app-location></app-location>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}