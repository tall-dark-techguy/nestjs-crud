import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsService } from 'src/carts/carts.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CartsService],
})
export class ProductsModule {}
