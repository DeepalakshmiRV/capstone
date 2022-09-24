import { Component, OnInit } from '@angular/core';
import { ProductRaw } from '../_models/product-raw';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = null;

  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(): void {
    this.prodService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
