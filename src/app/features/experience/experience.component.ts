import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Senior Java Developer',
      company: 'Company Name',
      period: '2022 — Present',
      location: 'Johannesburg, South Africa',
      description: [
        'Developed and maintained enterprise-grade microservices using Spring Boot and Java 17.',
        'Collaborated with cross-functional teams to deliver features in an Agile environment.',
        'Improved system performance by 30% through query optimisation and caching strategies.',
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker']
    },
    {
      role: 'Java Developer',
      company: 'Previous Company',
      period: '2020 — 2022',
      location: 'Johannesburg, South Africa',
      description: [
        'Built and maintained RESTful APIs consumed by Angular frontend applications.',
        'Worked with JPA and Hibernate for database interactions and schema management.',
        'Participated in code reviews and contributed to improving team coding standards.',
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JPA', 'Hibernate']
    },
    {
      role: 'Junior Java Developer',
      company: 'First Company',
      period: 'February 2018 – November 2020',
      location: 'Johannesburg, South Africa',
      description: [
        'Assisted in development of internal enterprise applications using Java EE.',
        'Wrote unit tests using JUnit and Mockito to ensure code quality.',
        'Gained experience working in Agile teams using Jira and Azure DevOps.',
      ],
      tech: ['Java', 'Java EE', 'JUnit', 'Mockito', 'Jira']
    },
  ];
}