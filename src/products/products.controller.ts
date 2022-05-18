import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body() body: { title: string; description: string; price: number },
  ) {
    const { title, description, price } = body;
    const product = await this.productsService.createProduct(
      title,
      description,
      price,
    );

    return {
      status: 'success',
      data: product,
      message: 'Product added successfully!',
    };
  }

  @Get()
  async getProducts() {
    const products = await this.productsService.fetchProducts();
    return { status: 'success', data: products };
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    const product = this.productsService.fetchSingleProduct(id);
    return { status: 'success', data: product };
  }
}
