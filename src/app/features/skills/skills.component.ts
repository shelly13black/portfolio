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
      skills: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'SCSS']
    },
    {
      category: 'Frameworks & Libraries',
      icon: '{ }',
      skills: ['Spring Boot', 'Angular', 'RxJS', 'Hibernate', 'JPA', 'Maven']
    },
    {
      category: 'Databases',
      icon: '[ ]',
      skills: ['PostgreSQL', 'MySQL', 'Oracle', 'H2']
    },
    {
      category: 'Tools & Platforms',
      icon: '⚙',
      skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Jira', 'Azure DevOps']
    },
    {
      category: 'Architecture & Methodologies',
      icon: '◈',
      skills: ['Microservices', 'REST APIs', 'Agile', 'Scrum', 'SOLID Principles', 'Design Patterns']
    },
  ];
}