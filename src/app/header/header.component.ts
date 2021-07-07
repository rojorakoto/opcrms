import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status = false;
  display = false;
  logoImage: any = '../assets/logo_header.png';
  cheminImage: any = '../assets/logo_accueil.png';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.status = !this.status;
  }

}
