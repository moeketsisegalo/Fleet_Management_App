// src/app/contact-us/contact-us.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Add logic here to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', this.contactForm);
    // You can implement HTTP service to send the form data to a server
    // Reset the form after submission
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
