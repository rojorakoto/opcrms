import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  cheminImage: any = '../assets/eventTitle.png';
  date: any = '../assets/EventDate.png';
  mrgeorges: any = '../assets/mrgeorges.jpg';
  essaadi: any = '../assets/essaadi.png';

  constructor() { }

  ngOnInit(): void {
  }

}
