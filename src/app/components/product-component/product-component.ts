import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from './product';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  constructor(private http: HttpClient) {}

  productos: Producto[] = [];
  ngOnInit(): void {
    this.http
      .get<Producto[]>('assets/jsons/productos.json')
      .subscribe((data) => {
        this.productos = data;
        console.log('Productos cargados:', this.productos);
      });
  }
  trackById(index: number, item: Producto): number {
    return item.id;
  }
}
