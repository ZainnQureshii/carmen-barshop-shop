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
           <span appScrollReveal class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 mb-2 block">The Portfolio</span>
           <h2 appScrollReveal [delay]="100" class="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white">Visual Proof</h2>
           <p appScrollReveal [delay]="200" class="mt-4 text-neutral-500 max-w-xl mx-auto">No filters. Just precision. The results speak for themselves.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          <!-- Item 1: Scissors/Tools Close up -->
          <div appScrollReveal [delay]="0" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-1 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Precision scissor cut">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
               <span class="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Scissor Work</span>
             </div>
          </div>

          <!-- Item 2 (Large): Interior/Atmosphere -->
          <div appScrollReveal [delay]="100" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-2 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1600&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Classic Barber Interior">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
               <span class="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">The Shop</span>
             </div>
          </div>

          <!-- Item 3 (Large): Barber Working -->
          <div appScrollReveal [delay]="200" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-2 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1600&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Barber styling hair">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
               <span class="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Textured Finish</span>
             </div>
          </div>

          <!-- Item 4: Close up fade -->
          <div appScrollReveal [delay]="300" class="group relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 md:col-span-1 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Clean fade haircut">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
               <span class="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Clean Fade</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent {}
