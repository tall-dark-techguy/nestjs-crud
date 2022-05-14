import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
