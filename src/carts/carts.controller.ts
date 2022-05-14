import { Controller, Get } from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCarts() {
    const carts = this.cartsService.fetchCarts();
    return { data: carts };
  }
}
