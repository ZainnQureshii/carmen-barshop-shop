import { Directive } from '@angular/core';

@Directive({
  selector: 'a[href^="#"], [appSmoothScroll]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)'
  }
})
export class SmoothScrollDirective {
  onClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLAnchorElement;
    const targetId = target.getAttribute('href');

    if (targetId && targetId !== '#' && targetId.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Optional: Update history without page jump
        history.pushState(null, '', targetId);
      }
    }
  }
}