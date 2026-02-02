import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollDirective } from '../directives/smooth-scroll.directive';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, SmoothScrollDirective],
  host: {
    '(window:scroll)': 'updateScrollState()',
    '(window:keydown.escape)': 'closeMobileMenu()'
  },
  template: `
    <nav
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
      [class.bg-white]="isScrolled() || isMobileMenuOpen()"
      [class.shadow-sm]="isScrolled() || isMobileMenuOpen()"
      [class.border-neutral-200]="isScrolled() || isMobileMenuOpen()"
      [class.bg-transparent]="!isScrolled() && !isMobileMenuOpen()"
      [class.border-transparent]="!isScrolled() && !isMobileMenuOpen()"
      [class.py-5]="!isScrolled()"
      [class.py-3]="isScrolled()"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-2xl font-serif font-bold tracking-tight relative z-50 transition-colors duration-300"
           [class.text-neutral-900]="isScrolled() || isMobileMenuOpen()"
           [class.text-white]="!isScrolled() && !isMobileMenuOpen()">
          CARMEN
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of links; track link.name) {
            <a [href]="link.href"
               appSmoothScroll
               class="text-sm font-medium uppercase tracking-widest hover:text-amber-600 transition-colors duration-300"
               [class.text-neutral-600]="isScrolled()"
               [class.text-white]="!isScrolled()">
              {{ link.name }}
            </a>
          }

          <a href="#book" class="px-5 py-2 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors">
            BOOK NOW
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center gap-4 z-50">
          <button (click)="toggleMobileMenu()" class="p-2 focus:outline-none group" aria-label="Toggle menu">
            <div class="flex flex-col justify-center items-center gap-1.5">
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [class.bg-neutral-900]="isScrolled() || isMobileMenuOpen()"
                     [class.bg-white]="!isScrolled() && !isMobileMenuOpen()"
                     [class.rotate-45]="isMobileMenuOpen()"
                     [class.translate-y-2]="isMobileMenuOpen()"></span>
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [class.bg-neutral-900]="isScrolled() || isMobileMenuOpen()"
                     [class.bg-white]="!isScrolled() && !isMobileMenuOpen()"
                     [class.opacity-0]="isMobileMenuOpen()"></span>
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [class.bg-neutral-900]="isScrolled() || isMobileMenuOpen()"
                     [class.bg-white]="!isScrolled() && !isMobileMenuOpen()"
                     [class.-rotate-45]="isMobileMenuOpen()"
                     [class.-translate-y-2]="isMobileMenuOpen()"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden"
           [class.translate-x-0]="isMobileMenuOpen()"
           [class.translate-x-full]="!isMobileMenuOpen()">
        
        @for (link of links; track link.name) {
          <a [href]="link.href" 
             appSmoothScroll
             (click)="closeMobileMenu()"
             class="text-2xl font-serif text-neutral-900 hover:text-amber-600 transition-colors">
            {{ link.name }}
          </a>
        }
        <a href="#book" (click)="closeMobileMenu()" class="mt-4 px-8 py-3 bg-neutral-900 text-white text-lg font-medium tracking-wide">
            BOOK APPOINTMENT
        </a>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  links = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Location', href: '#location' }
  ];

  updateScrollState() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}