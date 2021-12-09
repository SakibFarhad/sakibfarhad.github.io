import { Component, OnInit } from '@angular/core';
import { faGithub, faFacebook, faReddit, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faGithub_fawsm = faGithub;
  faFacebook_fawns = faFacebook;
  faReddit_fawsn = faReddit;
  faLinkidin_fawsm = faLinkedin;
  faStackOverflow_fawsm = faStackOverflow;
  constructor() { }

  ngOnInit(): void {
  }

}
