import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  isMenuCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    this.isMenuCollapsed = true;
  }
}
