import { Injectable, NotFoundException } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly cartsService: CartsService,
  ) {}
  private products: Product[] = [];

  async createProduct(
    title: string,
    description: string,
    price: number,
  ): Promise<Product> {
    const product = new this.productModel({ title, description, price });
    return await product.save();
  }

  async fetchProducts(): Promise<Product[]> {
    const products = await this.productModel.find({}).sort({ _id: -1 });
    return products;
  }

  fetchSingleProduct(id: string): Product {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return product;
  }
}
