import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body() body: { title: string; description: string; price: number },
  ) {
    const { title, description, price } = body;
    const id = this.productsService.createProduct(title, description, price);

    return {
      status: 'success',
      data: id,
      message: 'Product added successfully!',
    };
  }

  @Get()
  getProducts() {
    const products = this.productsService.fetchProducts();
    return { status: 'success', data: products };
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    const product = this.productsService.fetchSingleProduct(id);
    return { status: 'success', data: product };
  }
}
