import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero";
import { BigDay } from "./components/big-day/big-day";
import { Galery } from "./components/galery/galery";
import { EventDetails } from "./components/event-details/event-details";
import { RsvpSection } from "./components/rsvp-section/rsvp-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, BigDay, Galery, EventDetails, RsvpSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ui-boda');
}
