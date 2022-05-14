import { Module } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, CartsService],
})
export class ProductsModule {}
