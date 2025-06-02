import { Component, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProgramsService, Program } from '../../services/products.service';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProgramDetailComponent implements AfterViewInit {
  myProgram: Program | undefined;
  daysRemaining: number | null = null;

  private programService = inject(ProgramsService);
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.route.params.subscribe((params: any) => {
      const id = params.id;
      this.myProgram = this.programService.obtenerProgramaPorId(id);

      if (this.myProgram?.registrationDeadline) {
        this.daysRemaining = this.calculateDaysRemaining(this.myProgram.registrationDeadline);
      }

      console.log('Programa:', this.myProgram);
    });
  }

  private calculateDaysRemaining(deadline: Date): number {
    const today = new Date();
    const target = new Date(deadline);
    const diff = target.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
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
