import { Injectable } from '@nestjs/common';

@Injectable()
export class CartsService {
  private carts = [];

  fetchCarts() {
    return [...this.carts];
  }
}
