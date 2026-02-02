import { Directive, ElementRef, inject, AfterViewInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  
  // Inputs to control animation type and delay
  animationClass = input<string>('fade-in-up');
  delay = input<number>(0);
  threshold = input<number>(0.1);

  ngAfterViewInit() {
    this.el.nativeElement.classList.add(this.animationClass());
    if (this.delay() > 0) {
      this.el.nativeElement.style.transitionDelay = `${this.delay()}ms`;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          if (this.observer) this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: this.threshold(),
      rootMargin: '0px 0px -50px 0px'
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}