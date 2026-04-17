import { Component } from '@angular/core';
import { highlights, projects, siteMeta } from '../../data/site-content';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  readonly site = siteMeta;
  readonly highlights = highlights;
  readonly featuredProjects = projects.slice(0, 2);
}
