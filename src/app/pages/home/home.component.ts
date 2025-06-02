import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProgramsService, Program } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  programs: Program[] = [];
  name: string = 'Nuestros Programas';

  private programService = inject(ProgramsService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.programs = this.programService.obtenerProgramas();
  }

  goToDetail(id: string): void {
    this.router.navigate(['/program', id]); // Mejor navegación segura por segmentos
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elements = document.querySelectorAll('.fade-in');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    }
  }
}
