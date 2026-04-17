import { Component } from '@angular/core';
import {
  activities,
  education,
  experience,
  skillGroups,
  siteMeta,
} from '../../data/site-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly site = siteMeta;
  readonly skillGroups = skillGroups;
  readonly experience = experience;
  readonly education = education;
  readonly activities = activities;
}
