import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Theme functionality has been removed. 
  // This service remains as a placeholder to avoid breaking any other potential references, 
  // though there shouldn't be any.
  isDarkMode = signal<boolean>(false);

  constructor() {
    // No initialization. Default is light mode (CSS default).
  }

  toggleTheme() {
    // No op
  }
}