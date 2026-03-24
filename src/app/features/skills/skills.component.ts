import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Languages',
      icon: '< >',
      skills: ['Java', 'TypeScript', 'Python', 'SQL', 'Angular']
    },
    {
      category: 'Frameworks & Libraries',
      icon: '{ }',
      skills: ['Spring Boot', 'Angular', 'Hibernate', 'JPA', 'Maven', 'JUNIT 5']
    },
    {
      category: 'Databases',
      icon: '[ ]',
      skills: ['PostgreSQL', 'MySQL', 'H2']
    },
    {
      category: 'Tools & Platforms',
      icon: '⚙',
      skills: ['Git', 'Docker', 'Jenkins', 'Jira', 'Bitbucket', 'Bamboo']
    },
    {
      category: 'Architecture & Methodologies',
      icon: '◈',
      skills: ['Microservices', 'REST APIs', 'Agile', 'Scrum']
    },
  ];
}