import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-nav',
  imports: [RouterLink],
  templateUrl: './wedding-nav.html',
  styleUrl: './wedding-nav.css',
})
export class WeddingNav {
constructor(private router: Router) {}
goGallery() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/gallery']);
  });
}
}
