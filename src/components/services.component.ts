import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { SmoothScrollDirective } from '../directives/smooth-scroll.directive';

@Component({
  selector: 'app-services',
  imports: [CommonModule, ScrollRevealDirective, SmoothScrollDirective],
  template: `
    <section id="services" class="scroll-mt-28 py-24 bg-white dark:bg-neutral-900 transition-colors duration-500">
      <div class="container mx-auto px-6">
        
        <!-- Value Proposition: Why pay more? (Solving Problem #2) -->
        <div class="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-200 dark:border-neutral-800 pb-20">
            <div class="lg:col-span-5" appScrollReveal>
                <span class="text-amber-600 dark:text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">The Carmen Standard</span>
                <h2 class="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-6">More Than Just a Haircut.</h2>
                <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                    We believe in the ritual of grooming. We don't rush. We don't skip steps. Every service at Carmen is designed to be a reset button for your week.
                </p>
            </div>
            <div class="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6" appScrollReveal [delay]="200">
                <div class="space-y-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-amber-600">
                        <span class="font-serif font-bold">1</span>
                    </div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">Consultation</h4>
                    <p class="text-xs text-neutral-500">We analyze your head shape and hair type first.</p>
                </div>
                <div class="space-y-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-amber-600">
                        <span class="font-serif font-bold">2</span>
                    </div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">Precision Cut</h4>
                    <p class="text-xs text-neutral-500">No rough handling. Pure technique.</p>
                </div>
                <div class="space-y-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-amber-600">
                        <span class="font-serif font-bold">3</span>
                    </div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">Hot Towel</h4>
                    <p class="text-xs text-neutral-500">Relax with a steaming towel finish.</p>
                </div>
                <div class="space-y-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-amber-600">
                        <span class="font-serif font-bold">4</span>
                    </div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">Product & Style</h4>
                    <p class="text-xs text-neutral-500">Leave looking exactly how you wanted.</p>
                </div>
            </div>
        </div>

        <!-- Service List -->
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div appScrollReveal class="max-w-xl">
            <h3 class="text-3xl font-serif text-neutral-900 dark:text-white">Service Menu</h3>
          </div>
          <a href="#book" appScrollReveal [delay]="100" class="text-sm font-semibold uppercase tracking-wider underline underline-offset-4 decoration-amber-500 text-neutral-900 dark:text-white hover:text-amber-600 transition-colors">
            Reserve Appointment
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title; let i = $index) {
            <div appScrollReveal [delay]="i * 100" class="group p-8 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500 dark:hover:border-amber-500 transition-colors duration-300 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-none relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-serif text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{{ service.title }}</h3>
                <span class="text-lg font-medium text-neutral-900 dark:text-white">{{ service.price }}</span>
              </div>
              <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-6 leading-relaxed">{{ service.desc }}</p>
              <div class="flex justify-between items-center text-xs uppercase tracking-wider text-neutral-400">
                <span>{{ service.duration }}</span>
                <a href="#book" class="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 dark:text-amber-500 font-bold translate-x-2 group-hover:translate-x-0 duration-300 flex items-center gap-1 relative z-10 hover:text-amber-700">
                  Book Now <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    { title: "Men's Haircut", price: "€25", duration: "45 min", desc: "Consultation, wash, precision cut, hot towel, and styling." },
    { title: "Beard Sculpt & Trim", price: "€15", duration: "30 min", desc: "Razor lineup, shape definition, hot towel, and beard oil." },
    { title: "The Carmen Combo", price: "€35", duration: "75 min", desc: "Our signature haircut plus full beard service. The total reset." },
    { title: "Buzz Cut", price: "€15", duration: "20 min", desc: "Single grade cut with tapered edges and neck shave." },
    { title: "Grey Blending", price: "€20", duration: "30 min", desc: "Subtle, natural-looking color to reduce grey appearance." },
    { title: "Father & Son", price: "€40", duration: "60 min", desc: "Two signature haircuts. Quality time, quality style." }
  ];
}