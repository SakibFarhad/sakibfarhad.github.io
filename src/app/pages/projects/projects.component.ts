import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  url?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Personal Portfolio',
      description: 'This portfolio site built with Angular and Bootstrap',
      url: 'https://sakibfarhad.dev'
    },
    {
      title: 'Example App',
      description: 'An example app demonstrating features and patterns.'
    }
  ];
}
