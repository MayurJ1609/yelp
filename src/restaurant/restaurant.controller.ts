import { Controller, Logger, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { GetRestaurantFilterDto } from './dto/get-restaurants-filter-dto';

@Controller('restaurant')
export class RestaurantController {
  private logger = new Logger('RestaurantController');

  constructor(private restaurantService: RestaurantService) {}

  @Get()
  getRestaurants(filterDto: GetRestaurantFilterDto): Promise<Restaurant[]>{

  }
}
