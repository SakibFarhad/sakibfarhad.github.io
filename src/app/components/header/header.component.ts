import { Component, inject } from '@angular/core';
import { socialLinks, siteMeta } from '../../data/site-content';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  readonly site = siteMeta;
  readonly socialLinks = socialLinks;
}
