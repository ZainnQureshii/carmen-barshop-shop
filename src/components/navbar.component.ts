import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollDirective } from '../directives/smooth-scroll.directive';
import { ThemeService } from '../services/theme.service';

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
      [ngClass]="getNavClasses()"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-2xl font-serif font-bold tracking-tight relative z-50 transition-colors duration-300"
           [ngClass]="getLogoClasses()">
          CARMEN
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of links; track link.name) {
            <a [href]="link.href"
               appSmoothScroll
               class="text-sm font-medium uppercase tracking-widest hover:text-amber-600 transition-colors duration-300"
               [ngClass]="getLinkClasses()">
              {{ link.name }}
            </a>
          }

          <!-- Theme Toggle Button (Desktop) -->
          <button
            (click)="themeService.toggleTheme()"
            class="p-2 rounded-full transition-colors duration-300"
            [ngClass]="getThemeButtonClasses()"
            [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            title="{{ themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode' }}">
            <!-- Sun icon (shown in dark mode) -->
            @if (themeService.isDarkMode()) {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            } @else {
              <!-- Moon icon (shown in light mode) -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            }
          </button>

          <a href="#book"
             class="px-5 py-2 text-sm font-medium tracking-wide transition-colors"
             [ngClass]="themeService.isDarkMode() ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'">
            BOOK NOW
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center gap-2 z-50">
          <!-- Theme Toggle Button (Mobile) -->
          <button
            (click)="themeService.toggleTheme()"
            class="p-2 rounded-full transition-colors duration-300"
            [ngClass]="getMobileThemeButtonClasses()"
            [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (themeService.isDarkMode()) {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            }
          </button>

          <button (click)="toggleMobileMenu()" class="p-2 focus:outline-none group" aria-label="Toggle menu">
            <div class="flex flex-col justify-center items-center gap-1.5">
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [ngClass]="getHamburgerClasses()"
                     [class.rotate-45]="isMobileMenuOpen()"
                     [class.translate-y-2]="isMobileMenuOpen()"></span>
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [ngClass]="getHamburgerClasses()"
                     [class.opacity-0]="isMobileMenuOpen()"></span>
               <span class="block w-6 h-0.5 transition-all duration-300"
                     [ngClass]="getHamburgerClasses()"
                     [class.-rotate-45]="isMobileMenuOpen()"
                     [class.-translate-y-2]="isMobileMenuOpen()"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden"
           [ngClass]="themeService.isDarkMode() ? 'bg-neutral-900' : 'bg-white'"
           [class.translate-x-0]="isMobileMenuOpen()"
           [class.translate-x-full]="!isMobileMenuOpen()">

        @for (link of links; track link.name) {
          <a [href]="link.href"
             appSmoothScroll
             (click)="closeMobileMenu()"
             class="text-2xl font-serif transition-colors"
             [ngClass]="themeService.isDarkMode() ? 'text-white hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
            {{ link.name }}
          </a>
        }
        <a href="#book" (click)="closeMobileMenu()"
           class="mt-4 px-8 py-3 text-lg font-medium tracking-wide transition-colors"
           [ngClass]="themeService.isDarkMode() ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'">
            BOOK APPOINTMENT
        </a>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  themeService = inject(ThemeService);
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

  getNavClasses(): Record<string, boolean> {
    const scrolledOrOpen = this.isScrolled() || this.isMobileMenuOpen();
    const isDark = this.themeService.isDarkMode();

    return {
      'bg-white': scrolledOrOpen && !isDark,
      'bg-neutral-900': scrolledOrOpen && isDark,
      'shadow-sm': scrolledOrOpen,
      'border-neutral-200': scrolledOrOpen && !isDark,
      'border-neutral-800': scrolledOrOpen && isDark,
      'bg-transparent': !scrolledOrOpen,
      'border-transparent': !scrolledOrOpen,
      'py-5': !this.isScrolled(),
      'py-3': this.isScrolled()
    };
  }

  getLogoClasses(): Record<string, boolean> {
    const scrolledOrOpen = this.isScrolled() || this.isMobileMenuOpen();
    const isDark = this.themeService.isDarkMode();

    return {
      'text-neutral-900': scrolledOrOpen && !isDark,
      'text-white': (!scrolledOrOpen && !this.isMobileMenuOpen()) || isDark
    };
  }

  getLinkClasses(): Record<string, boolean> {
    const isDark = this.themeService.isDarkMode();

    return {
      'text-neutral-600': this.isScrolled() && !isDark,
      'text-neutral-300': this.isScrolled() && isDark,
      'text-white': !this.isScrolled()
    };
  }

  getThemeButtonClasses(): Record<string, boolean> {
    const isDark = this.themeService.isDarkMode();

    return {
      'text-neutral-600': this.isScrolled() && !isDark,
      'text-neutral-300': this.isScrolled() && isDark,
      'text-white': !this.isScrolled(),
      'hover:bg-neutral-100': !isDark,
      'hover:bg-neutral-800': isDark
    };
  }

  getMobileThemeButtonClasses(): Record<string, boolean> {
    const scrolledOrOpen = this.isScrolled() || this.isMobileMenuOpen();
    const isDark = this.themeService.isDarkMode();

    return {
      'text-neutral-900': scrolledOrOpen && !isDark,
      'text-white': (!scrolledOrOpen && !this.isMobileMenuOpen()) || (scrolledOrOpen && isDark)
    };
  }

  getHamburgerClasses(): Record<string, boolean> {
    const scrolledOrOpen = this.isScrolled() || this.isMobileMenuOpen();
    const isDark = this.themeService.isDarkMode();

    return {
      'bg-neutral-900': scrolledOrOpen && !isDark,
      'bg-white': (!scrolledOrOpen && !this.isMobileMenuOpen()) || (scrolledOrOpen && isDark)
    };
  }
}
