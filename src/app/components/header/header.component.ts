import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Using CSS-based Font Awesome icons via CDN; no TS icon imports needed.
  constructor() { }

  ngOnInit(): void {
  }

}
