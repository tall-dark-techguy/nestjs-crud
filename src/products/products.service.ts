import { Injectable, NotFoundException } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(private readonly cartsService: CartsService) {}
  private products: Product[] = [];

  createProduct(title: string, description: string, price: number) {
    const product = new Product(
      Math.random().toString(),
      title,
      description,
      price,
    );

    this.products.push(product);
    return product.id;
  }

  fetchProducts(): Product[] {
    console.log(`Carts: `, this.cartsService.fetchCarts());
    return [...this.products];
  }

  fetchSingleProduct(id: string): Product {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return product;
  }
}
