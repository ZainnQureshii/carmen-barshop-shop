import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="gallery" class="scroll-mt-28 py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
           <span class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 mb-2 block">Portfolio</span>
           <h2 class="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white">Recent Work</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          <!-- Item 1: Scissors/Tools Close up (Similar to user ref) -->
          <div appScrollReveal [delay]="0" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-1">
             <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Precision scissor cut">
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span class="text-white font-serif text-xl italic">Precision & Detail</span>
             </div>
          </div>
          
          <!-- Item 2 (Large): Interior/Atmosphere (Fixed Image) -->
          <div appScrollReveal [delay]="100" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-2">
             <img src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1600&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Classic Barber Interior">
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span class="text-white font-serif text-xl italic">Atmosphere</span>
             </div>
          </div>

          <!-- Item 3 (Large): Barber Working (Similar to user ref of beard trim) -->
          <div appScrollReveal [delay]="200" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-2">
             <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1600&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Barber styling hair">
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span class="text-white font-serif text-xl italic">Modern Texture</span>
             </div>
          </div>

          <!-- Item 4: Close up on fade/neck (Similar to user ref) -->
          <div appScrollReveal [delay]="300" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-1">
             <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Close up haircut">
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span class="text-white font-serif text-xl italic">Clean Lines</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent {}