import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetRestaurantFilterDto {
  @IsOptional()
  search: string;
}
