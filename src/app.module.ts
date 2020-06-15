import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    RestaurantModule,
    MongooseModule.forRoot('mongodb://localhost/yelp'),
  ],
})
export class AppModule {}
