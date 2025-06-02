import { CommonModule } from '@angular/common';
import { Component, inject, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramsService, Program } from '../../services/products.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  programs: Program[] = [];
  private programService = inject(ProgramsService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  name: string = 'Nuestros Programas';

  constructor() {
    this.programs = this.programService.obtenerProgramas();
  }

  goToDetail(id: string) {
    this.router.navigateByUrl(`/program/${id}`);
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
