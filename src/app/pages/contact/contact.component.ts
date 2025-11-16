import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model = { name: '', email: '', message: '' };

  submit() {
    // In a real app you would send the message to a backend.
    console.log('Contact form submitted', this.model);
    alert('Thanks — message submitted (demo).');
    this.model = { name: '', email: '', message: '' };
  }
}
