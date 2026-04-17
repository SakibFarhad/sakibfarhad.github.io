import { Component } from '@angular/core';
import { socialLinks, siteMeta } from '../../data/site-content';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly site = siteMeta;
  readonly socialLinks = socialLinks;
}
