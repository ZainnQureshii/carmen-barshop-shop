import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  template: `
    <section id="book" class="scroll-mt-28 py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-12">
           <h2 appScrollReveal class="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-4">Claim Your Chair</h2>
           <p appScrollReveal [delay]="100" class="text-neutral-500">Excellence is in high demand. Reserve your time.</p>
        </div>

        <div appScrollReveal [delay]="200" class="bg-white dark:bg-neutral-900 p-8 md:p-12 shadow-2xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-800">
          @if (!submitted()) {
            <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="space-y-2">
                  <label for="name" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Full Name</label>
                  <input id="name" type="text" formControlName="name" placeholder="Your full name" class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400">
                  @if (bookingForm.get('name')?.invalid && bookingForm.get('name')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Name is required</p>
                  }
                </div>
                <!-- Email -->
                <div class="space-y-2">
                  <label for="email" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Email</label>
                  <input id="email" type="email" formControlName="email" placeholder="your@email.com" class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400">
                  @if (bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched) {
                    <p class="text-red-500 text-xs mt-1">
                      @if (bookingForm.get('email')?.errors?.['required']) { Email is required }
                      @else if (bookingForm.get('email')?.errors?.['email']) { Please enter a valid email }
                    </p>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Phone -->
                <div class="space-y-2">
                  <label for="phone" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Phone Number</label>
                  <input id="phone" type="tel" formControlName="phone" placeholder="+385 XX XXX XXXX" class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400">
                  @if (bookingForm.get('phone')?.invalid && bookingForm.get('phone')?.touched) {
                    <p class="text-red-500 text-xs mt-1">
                      @if (bookingForm.get('phone')?.errors?.['required']) { Phone number is required }
                      @else if (bookingForm.get('phone')?.errors?.['pattern']) { Please enter a valid phone number }
                    </p>
                  }
                </div>
                <!-- Service -->
                <div class="space-y-2">
                  <label for="service" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Service</label>
                  <div class="relative">
                    <select id="service" formControlName="service" class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white appearance-none cursor-pointer">
                      <option value="" disabled>Select a service</option>
                      <option value="cut">The Signature Cut - €25</option>
                      <option value="beard">Bespoke Beard Sculpting - €15</option>
                      <option value="combo">The Executive Package - €35</option>
                      <option value="buzz">Precision Buzz - €15</option>
                      <option value="grey">Executive Grey Blending - €20</option>
                      <option value="fatherson">Legacy Service (Father & Son) - €40</option>
                    </select>
                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  @if (bookingForm.get('service')?.invalid && bookingForm.get('service')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Please select a service</p>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Date -->
                <div class="space-y-2">
                  <label for="date" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Preferred Date</label>
                  <input id="date" type="date" formControlName="date" [min]="minDate" class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white cursor-pointer">
                  @if (bookingForm.get('date')?.invalid && bookingForm.get('date')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Please select a date</p>
                  }
                </div>
                <!-- Notes -->
                <div class="space-y-2">
                  <label for="notes" class="text-xs uppercase tracking-wider font-semibold text-neutral-500">Special Requests <span class="text-neutral-400 normal-case">(optional)</span></label>
                  <input id="notes" type="text" formControlName="notes" placeholder="Any preferences..." class="w-full bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-amber-500 dark:focus:border-amber-500 outline-none px-4 py-3 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400">
                </div>
              </div>

              <div class="pt-4">
                <button type="submit" [disabled]="bookingForm.invalid || isSubmitting()" class="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  @if (isSubmitting()) {
                    <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                  } @else {
                    Confirm Booking Request
                  }
                </button>
                <p class="text-xs text-center text-neutral-400 mt-4">We will contact you to confirm the exact time.</p>
              </div>
            </form>
          } @else {
            <div class="text-center py-12 flex flex-col items-center">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 class="text-2xl font-serif text-neutral-900 dark:text-white mb-2">Request Sent!</h3>
              <p class="text-neutral-500">Thank you, {{ submittedName() }}. We will contact you shortly.</p>
              <button (click)="resetForm()" class="mt-8 text-sm font-semibold underline underline-offset-4 text-neutral-900 dark:text-white hover:text-amber-600 transition-colors">Book another</button>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class BookingComponent {
  bookingForm: FormGroup;
  submitted = signal(false);
  isSubmitting = signal(false);
  submittedName = signal('');
  minDate: string;

  constructor(private fb: FormBuilder) {
    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting.set(true);
      const name = this.bookingForm.get('name')?.value;

      // Simulate API call
      setTimeout(() => {
        this.submittedName.set(name);
        this.submitted.set(true);
        this.isSubmitting.set(false);
        console.log('Booking submitted:', this.bookingForm.value);
      }, 1000);
    }
  }

  resetForm() {
    this.bookingForm.reset();
    this.submitted.set(false);
  }
}
