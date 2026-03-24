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
      company: 'First National Bank',
      period: 'August 2024 — Present',
      location: 'Johannesburg, South Africa',
      description: [
        'Working on a system used for scoring home loans. The scoring process involves validation, data orchestration, data defaulting, scoring, affordability, policy rules, lending strategy and pricing.',
        'Building new features based on new business requiremnts, technical debt abd documentation.',
        'Code reviews to ensure all standards are being followed. Production support.',
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL']
    },
    {
      role: 'Senior Java Developer',
      company: 'WesBank',
      period: 'Decemeber 2021 — July 2024',
      location: 'Johannesburg, South Africa',
      description: [
        'Migrating the system from cloud to on premise servers to adhere bank standards. Moving from subversion to bitbucket and from using using Jenkins to bmaboo for deployments.',
        'Decoupling the existing monolith system into standalone Spring boot modules, to ensure that all components function independently and can be deployed individually without needing multiple projects to be running at the same time.',
        'Assisting partners with integrating with the system to able to use our services on their websites.',
        'Providing support to new hires, onboarding and system walkthroughs and KYT sessions.'
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JPA', 'Hibernate']
    },
    {
      role: 'Java Developer',
      company: 'First National Bank',
      period: 'Decemeber 2020 – November 2021',
      location: 'Johannesburg, South Africa',
      description: [
        'Supporting a system which is in the process of being switched off. Investigating and fixing any production issues that occur on the system.',
        'Code reviews and production support',
      ],
      tech: ['Java', 'Java EE', 'JUnit', 'Mockito', 'Jira']
    },
    {
      role: 'Junior Java Developer',
      company: 'WesBank',
      period: 'February 2018 – November 2020',
      location: 'Johannesburg, South Africa',
      description: [
        'Worked on FastTrack (https://fasttrack.wesbank.co.za/). Using microservices and Spring boot to update the existing monolith services.',
        'Built a new system, using spring-boot, which integrates existing FastTrack services into a system which is used by dealers.',
        'Created an Admin system which will be used to handle/fix system error that occur on FastTrack using angular for the frontend.',
        'Gained experience working in Agile teams using Jira and Jenkins.',
      ],
      tech: ['Java', 'Spring-boot', 'JUnit', 'Mockito', 'Jira']
    },
  ];
}