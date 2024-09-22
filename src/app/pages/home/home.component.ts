import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products:any = []
  private prodService = inject(ProductsService)
  private route = inject(Router)
  name: string = '...';

  goDetail (id : number) {
    this.route.navigateByUrl(`/product/`+ id)
  }

  constructor(){
    this.products = this.prodService.obtenerProductos();
  }



}
