import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-location',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="location" class="scroll-mt-28 py-24 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-800">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Info -->
        <div class="space-y-12">
          <div appScrollReveal>
            <h2 class="text-4xl font-serif mb-6">Visit Us</h2>
            <address class="not-italic text-lg text-neutral-600 dark:text-neutral-400">
              Ulica Republike 14<br>
              31000 Osijek, Croatia<br>
              <a href="tel:+38531000000" class="hover:text-amber-600 transition-colors mt-2 block">+385 31 000 000</a>
              <a href="mailto:info@carmen-osijek.hr" class="hover:text-amber-600 transition-colors block">info@carmen-osijek.hr</a>
            </address>
          </div>

          <div appScrollReveal [delay]="100">
            <h3 class="text-xl font-serif mb-4">Opening Hours</h3>
            <div class="space-y-3 max-w-sm">
              <div class="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span class="text-neutral-600 dark:text-neutral-400">Mon - Fri</span>
                <span class="font-medium">09:00 - 20:00</span>
              </div>
              <div class="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span class="text-neutral-600 dark:text-neutral-400">Saturday</span>
                <span class="font-medium">09:00 - 15:00</span>
              </div>
              <div class="flex justify-between pb-2 text-neutral-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div appScrollReveal [delay]="200" class="h-[400px] w-full bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.936081541454!2d18.69315907663456!3d45.55169497107567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a869728075%3A0x5b6c80850274198d!2sOsijek%2C%20Croatia!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Carmen Salon location on Google Maps - Ulica Republike 14, Osijek">
          </iframe>
        </div>

      </div>
    </section>
  `
})
export class LocationComponent {}