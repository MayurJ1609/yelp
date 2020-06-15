import {
  Controller,
  Logger,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { GetRestaurantFilterDto } from './dto/get-restaurants-filter-dto';
import { Restaurant } from './restaurant.schema';
import { CreateRestaurantDto } from './dto/create-restaurant-dto';

@Controller('restaurant')
export class RestaurantController {
  private logger = new Logger('RestaurantController');

  constructor(private restaurantService: RestaurantService) {}

  @Get()
  getRestaurants(@Query() filterDto: GetRestaurantFilterDto) {
    this.logger.verbose(`Filter "${JSON.stringify(filterDto)}"`);
    return this.restaurantService.getRestaurants(filterDto);
  }

  @Get(':id')
  getRestaurant(@Param('id') restaurantId: string) {
    return this.restaurantService.getRestaurantById(restaurantId);
  }

  @Post()
  createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(createRestaurantDto);
  }

  @Patch(':id')
  updateRestaurant(
    @Param('id') restaurantId: string,
    @Body() createRestaurantDto: CreateRestaurantDto,
  ) {
    return this.restaurantService.updateRestaurant(
      restaurantId,
      createRestaurantDto,
    );
  }

  @Delete(':id')
  deleteRestaurant(@Param('id') restaurantId: string) {
    return this.restaurantService.deleteRestaurant(restaurantId);
  }
}
