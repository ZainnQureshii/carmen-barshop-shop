import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'carmen-theme';
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initializeTheme();

    // Effect to sync theme changes to DOM and localStorage
    effect(() => {
      const isDark = this.isDarkMode();
      this.applyTheme(isDark);
      this.persistTheme(isDark);
    });
  }

  private initializeTheme(): void {
    // Check localStorage first
    const storedTheme = localStorage.getItem(this.STORAGE_KEY);

    if (storedTheme !== null) {
      this.isDarkMode.set(storedTheme === 'dark');
    } else {
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem(this.STORAGE_KEY) === null) {
        this.isDarkMode.set(e.matches);
      }
    });
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private persistTheme(isDark: boolean): void {
    localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }
}
