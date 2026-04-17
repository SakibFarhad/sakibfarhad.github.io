import { Component } from '@angular/core';
import { projects, siteMeta } from '../../data/site-content';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent {
  readonly site = siteMeta;
  readonly projects = projects;
}
