import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ProductsModule,
    CartsModule,
    TasksModule,

    // set up our database connection
    MongooseModule.forRoot('mongodb://localhost/nest-hello-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
