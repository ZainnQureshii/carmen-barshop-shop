import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-team',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="team" class="scroll-mt-28 py-24 bg-white dark:bg-neutral-900 transition-colors duration-500 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
           <h2 appScrollReveal class="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white">The Artisans</h2>
           <p appScrollReveal [delay]="100" class="text-neutral-500 max-w-sm text-right md:text-left">A collective of unparalleled skill. United by a dedication to perfection.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (member of team; track member.name; let i = $index) {
            <div appScrollReveal [delay]="i * 150" class="group">
              <div class="relative overflow-hidden aspect-[3/4] mb-6 bg-neutral-100 dark:bg-neutral-800">
                <img [src]="member.image" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" [alt]="member.name">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 class="text-2xl font-serif text-neutral-900 dark:text-white mb-1">{{ member.name }}</h3>
              <p class="text-amber-600 dark:text-amber-500 text-sm uppercase tracking-wider mb-3">{{ member.role }}</p>
              <p class="text-neutral-500 text-sm leading-relaxed">{{ member.bio }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TeamComponent {
  team = [
    {
      name: "Marko Horvat",
      role: "Head Barber",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      bio: "A vanguard of the craft. 10 years perfecting the delicate balance between Italian tradition and modern edge."
    },
    {
      name: "Ivan Kovač",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      bio: "Architect of the skin fade. His precision is an obsession, ensuring every gradient is flawless."
    },
    {
      name: "Elena Jurić",
      role: "Color Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      bio: "The color authority. Specializing in subtle, natural, undefinable improvements that take years off."
    }
  ];
}
