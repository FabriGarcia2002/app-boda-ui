import { Component } from '@angular/core';
import { GuestFormModalComponent } from "../guest-form-modal/guest-form-modal";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rsvp-section',
  imports: [GuestFormModalComponent,CommonModule],
  templateUrl: './rsvp-section.html',
  styleUrl: './rsvp-section.css',
})
export class RsvpSection {
 isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    console.log('Modal opened');
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
