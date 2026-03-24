import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  name = '';
  bio = [
    'I am aJava Developer with 7+ years of experience building and maintaining backend systems within the banking domain.',
    'I have a background in Java and Spring Boot, with hands-on experience in system migrations, modularizing monolithic applications, and supporting high-availability production environments.',
    'I am passionate about writing clean, maintainable code and building scalable systems that solve real business problems.',
    'I am known for taking ownership of complex systems, collaborating across teams, and delivering reliable, maintainable software in regulated environments.',
  ];

  details = [
    { label: 'Location', value: 'Johannesburg, South Africa'},
    { label: 'Experience', value: '7 years'},
    { label: 'Current Role', value: 'Senior Java Developer'},
    { label: 'Availability', value: 'Open to opportunities'}
  ];
}
