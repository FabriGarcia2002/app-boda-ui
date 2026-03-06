import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { BigDay } from "../big-day/big-day";
import { Galery } from "../galery/galery";
import { EventDetails } from "../event-details/event-details";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Hero, BigDay, Galery, EventDetails, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
    template: `
    <app-hero></app-hero>
    <app-big-day></app-big-day>
    <app-galery></app-galery>
    <app-event-details></app-event-details>
    <app-footer></app-footer>
  `
})
export class Home {

}
