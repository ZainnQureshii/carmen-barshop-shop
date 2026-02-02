import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { SmoothScrollDirective } from '../directives/smooth-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ScrollRevealDirective, SmoothScrollDirective],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      <!-- Full Background Image - Switched to a reliable interior shot -->
      <div class="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          class="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          alt="Carmen Salon Interior - Premium Atmosphere"
        >
        <!-- Premium Overlay: Gradient to ensure text readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div class="absolute inset-0 bg-neutral-950/30 mix-blend-multiply"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full pt-20">
        <!-- Text Content -->
        <div class="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col items-start gap-8 text-white">
          <div appScrollReveal [delay]="100" class="flex items-center gap-4">
            <span class="h-px w-16 bg-amber-500"></span>
            <span class="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Osijek &middot; Est. 2024</span>
          </div>

          <!-- Headline addressing Consistency & Identity -->
          <h1 appScrollReveal [delay]="200" class="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] text-white drop-shadow-2xl">
            Precision.<br/>
            <span class="text-neutral-400">Every</span> <span class="italic text-amber-500">Single</span> <br/>
            Time.
          </h1>

          <!-- Subhead addressing Retention & Trust -->
          <p appScrollReveal [delay]="300" class="text-lg md:text-xl text-neutral-300 max-w-lg font-light leading-relaxed drop-shadow-lg border-l-2 border-amber-500/50 pl-6">
            We don't rely on luck. Our European-trained barbers follow a rigorous standard to ensure your cut looks perfect today, and exactly the same next month.
          </p>

          <div appScrollReveal [delay]="400" class="flex flex-wrap gap-4 mt-8">
            <a href="#book" class="group relative px-10 py-5 bg-white text-neutral-900 text-sm font-bold uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-300 shadow-lg shadow-white/10">
              <span class="relative z-10">Secure Your Spot</span>
              <div class="absolute inset-0 h-full w-full bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
            </a>
            <a href="#services" class="px-10 py-5 border border-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              The Experience
            </a>
          </div>

          <!-- Trust Signals - Addressing Professionalism -->
          <div appScrollReveal [delay]="500" class="flex gap-12 mt-16 pt-8 border-t border-white/10 w-full max-w-lg">
            <div class="flex flex-col gap-1">
              <span class="text-3xl font-serif text-white">4.9</span>
              <span class="text-[10px] uppercase tracking-widest text-neutral-400">Google Rating</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-3xl font-serif text-white">100%</span>
              <span class="text-[10px] uppercase tracking-widest text-neutral-400">Sanitized Tools</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-3xl font-serif text-white">45<span class="text-lg align-top text-amber-500">min</span></span>
              <span class="text-[10px] uppercase tracking-widest text-neutral-400">Avg. Appointment</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/30">
        <span class="text-[10px] uppercase tracking-widest">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  `,
  styles: [`
    .animate-slow-zoom {
      animation: zoomIn 30s infinite alternate ease-in-out;
    }
    @keyframes zoomIn {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
  `]
})
export class HeroComponent {}