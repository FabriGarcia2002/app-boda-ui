import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero";
import { BigDay } from "./components/big-day/big-day";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, BigDay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ui-boda');
}
