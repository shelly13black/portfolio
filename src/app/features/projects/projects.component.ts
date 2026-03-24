import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Todo Application',
      description: 'A full stack todo application with categories, due dates, filtering and pagination built with Spring Boot and Angular.',
      tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/YOUR_USERNAME/todo-app',
      liveUrl: 'https://todo-app.vercel.app',
      highlights: [
        'RESTful API built with Spring Boot and JPA/Hibernate',
        'Angular frontend with reactive forms and HttpClient',
        'Category management with one-to-many JPA relationships',
        'Backend driven pagination and filtering',
      ],
      type: 'fullstack'
    },
    {
      title: 'Microservices Dashboard',
      description: 'An Angular dashboard that visualises data from multiple Spring Boot microservices with real time status indicators.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'RxJS'],
      githubUrl: 'https://github.com/YOUR_USERNAME/microservices-dashboard',
      highlights: [
        'Multiple Spring Boot microservices behind an API gateway',
        'Angular dashboard consuming multiple REST endpoints',
        'RxJS observables for reactive data handling',
        'Error handling and loading states per service',
      ],
      type: 'fullstack'
    },
    {
      title: 'Task Tracker',
      description: 'A secure task management application with JWT authentication, protected routes and role based access control.',
      tech: ['Java', 'Spring Boot', 'JWT', 'Angular', 'PostgreSQL'],
      githubUrl: 'https://github.com/YOUR_USERNAME/task-tracker',
      highlights: [
        'JWT authentication with Spring Security',
        'Angular route guards for protected pages',
        'HTTP interceptors for token management',
        'Role based access control for admin and user roles',
      ],
      type: 'fullstack'
    },
  ];

  getTypeBadgeClass(type: string): string {
    const classes: Record<string, string> = {
      fullstack: 'bg-blue-50 text-blue-700',
      frontend: 'bg-purple-50 text-purple-700',
      backend: 'bg-green-50 text-green-700',
    };
    return classes[type] || 'bg-gray-50 text-gray-700';
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      fullstack: 'Full Stack',
      frontend: 'Frontend',
      backend: 'Backend',
    };
    return labels[type] || type;
  }
}