import { Component } from '@angular/core';
import { contactInfo, siteMeta } from '../../data/site-content';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly site = siteMeta;
  readonly contact = contactInfo;
  model = { name: '', email: '', message: '' };
  submitted = false;

  submit() {
    this.submitted = true;
    this.model = { name: '', email: '', message: '' };
  }
}
