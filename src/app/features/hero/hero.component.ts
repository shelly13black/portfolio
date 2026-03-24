import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  name = 'Shelly Mashilo';
  title = 'Java Developer';
  subtitle = 'Add a one liner about what you do';
  cvLink = '/assets/cv.pdf';
}