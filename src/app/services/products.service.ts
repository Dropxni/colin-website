import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  category: string;
  aviable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      category: 'Bebidas',
      description: 'Bebida con lactobacilos',
      image: 'https://www.yakultpuebla.com.mx/wp-content/uploads/2023/03/yakult-product-40Lt.png',
      name: 'Yakult',
      price: 12,
      stock: 50,
      aviable: true
    },
    {
      category: 'Botanas',
      description:'Cacahuates japoneses',
      image: 'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1366343_S_1280_F.jpg',
      name: 'Karate',
      price: 10,
      stock: 100,
      aviable: true
    },
    {
      category: 'Botanas',
      description: 'Papas fritas sabor habanero',
      image: 'https://comercialtrevino.com/images/3268.jpg',
      name: 'Sabritas',
      price: 15,
      stock: 100,
      aviable: true
    },
    {
      category: 'Botanas',
      description: 'Galletas de chocolate',
      image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750100012230L.jpg',
      name: 'Principe de chocolate',
      price: 12,
      stock: 100,
      aviable: false
    },
    {
      category: 'Bebidas',
      description: 'Refresco de cola',
      image: 'https://techlifestyle.mx/cdn/shop/files/THINFIT1_2_64d9c4b6-7cfe-4248-8b30-3e96469ebff6.jpg?v=1706384086&width=2048',
      name: 'Coca Cola',
      price: 15,
      stock: 100,
      aviable: true
    },
    {
      category: 'Sopas Instantaneas',
      description: 'Sopa de fideos',
      image: 'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/6/4/646_3.jpg?width=265&height=390&store=default&image-type=image',
      name: 'Maruchan',
      price: 10,
      stock: 80,
      aviable: true
    },
    {
      category: 'Dulces',
      description: 'Goma de mascar sabor fresa',
      image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00762221097343L.jpg',
      name: 'Trident',
      price: 15,
      stock: 120,
      aviable: true
    },
    {
      category: 'Dulces',
      description: 'Paleta de caramelo',
      image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750101114556L.jpg',
      name: 'Rockaleta',
      price: 5,
      stock: 150,
      aviable: true
    },
    {
      category: 'Bebidas',
      description: 'Refresco de naranja',
      image: 'https://panoli.mx/cdn/shop/products/RE0053_761x.jpg?v=1600970424',
      name: 'Fanta',
      price: 20,
      stock: 200,
      aviable: true
    },
    {
      category: 'Botanas',
      description: 'Papas fritas sabor queso',
      image: 'https://www.smartnfinal.com.mx/wp-content/uploads/2021/06/90107-Ruffles-con-queso-Sabritas-539-g-1.jpg',
      name: 'Ruffles',
      price: 15,
      stock: 234,
      aviable: true
    },
    {
      category: 'Botanas',
      description: 'Cacahuates japoneses',
      image: 'https://www.barcel.com.mx/themes/custom/barceldos/images/files/Kiyakis_Clasico.png',
      name: 'Kiyakis',
      price: 10,
      stock: 167,
      aviable: true
    },
    {
      category: 'Botanas',
      description: 'Totopos de maíz con chile y limón',
      image: 'https://superlavioleta.com/cdn/shop/products/7500478012114-00-CH1200Wx1200H.jpg?v=1609552946',
      name: 'Doritos',
      price: 15,
      stock: 90,
      aviable: true
    },
    {
      category: 'Dulces',
      description: 'Goma de mascar',
      image: 'https://swissbrothers.com/2357-large_default/goma-de-mascar-bubbaloo-mora-.jpg',
      name: 'Bubbaloo',
      price: 2,
      stock: 100,
      aviable: false
    }
  ]

  obtenerProductos(){
    return this.products;
  }

  obtenerProducto(id: number){
    return this.products[id]
  }

  constructor() { }
}
