import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeddingNav } from "../wedding-nav/wedding-nav";
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery-component',
  standalone: true,
  imports: [WeddingNav, CommonModule],
  templateUrl: './galery-component.html',
  styleUrls: ['./galery-component.css'],
})
export class GaleryComponent implements OnInit {
  loading = false;
  error = false;
  photos: { url: string; alt?: string; message?: string }[] = [];

  showModal = false;
  currentMedia: { url: string; type: 'image' | 'video' } | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef  // 👈 agregar esto
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos() {
    this.loading = true;
    this.error = false;

    const timestamp = new Date().getTime();

    this.http
      .get<{ url: string }[]>(`http://localhost:3000/photos?t=${timestamp}`)
      .subscribe({
        next: (data) => {
          this.photos = data;
          this.loading = false;
          this.cdr.detectChanges(); // 👈 forzar detección de cambios
        },
        error: (err) => {
          console.error('Error cargando fotos', err);
          this.loading = false;
          this.error = true;
          this.cdr.detectChanges(); // 👈 también en el error
        }
      });
  }

  isVideo(url: string) {
    const cleanUrl = url.split('?')[0];
    return cleanUrl.toLowerCase().endsWith('.mp4');
  }

  openModal(url: string) {
    this.currentMedia = {
      url,
      type: this.isVideo(url) ? 'video' : 'image',
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentMedia = null;
  }
}