import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { differenceInSeconds } from 'date-fns';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-big-day',
  imports: [],
  templateUrl: './big-day.html',
  styleUrl: './big-day.css',
})
export class BigDay implements OnInit, OnDestroy {
  private subscription!: Subscription;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit() {
    this.TimeRest(); 
    this.subscription = interval(1000).subscribe(() => this.TimeRest());

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  TimeRest(): void {
    const now = new Date();
    const targetDate = new Date('2026-03-07T18:30:00');

    const totalSeconds = Math.max(0, differenceInSeconds(targetDate, now));

    this.days = Math.floor(totalSeconds / (60 * 60 * 24));
    this.hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    this.minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    this.seconds = totalSeconds % 60;
    this.cd.markForCheck()
  }








}
