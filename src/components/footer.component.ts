import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-serif font-bold tracking-tight mb-2">CARMEN</h2>
          <p class="text-neutral-500 text-sm">Osijek's Premier Grooming Destination.</p>
        </div>

        <div class="flex gap-6">
          <a href="https://instagram.com/carmen.osijek" target="_blank" rel="noopener noreferrer" class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" aria-label="Follow us on Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
          <a href="https://facebook.com/carmen.osijek" target="_blank" rel="noopener noreferrer" class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" aria-label="Follow us on Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Facebook
          </a>
        </div>

        <div class="text-neutral-600 text-sm">
          &copy; {{ year }} Carmen Salon. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
