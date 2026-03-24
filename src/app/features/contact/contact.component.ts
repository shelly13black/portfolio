import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSuccess = false;
  isError = false;

  contactDetails = [
    { label: 'Email', value: 'your.email@gmail.com', icon: '✉' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: '🔗' },
    { label: 'GitHub', value: 'github.com/yourusername', icon: '⌥' },
    { label: 'Location', value: 'Johannesburg, South Africa', icon: '📍' },
  ];

  async onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.isSuccess = false;
    this.isError = false;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        environment.emailjs.publicKey
      );
      this.isSuccess = true;
      this.form = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      this.isError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}
