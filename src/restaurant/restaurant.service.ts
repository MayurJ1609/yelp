import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './restaurant.schema';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant-dto';
import { GetRestaurantFilterDto } from './dto/get-restaurants-filter-dto';
import { query } from 'express';

@Injectable()
export class RestaurantService {
  private logger = new Logger('RestaurantService');

  constructor(
    @InjectModel('Restaurant') private restaurantModel: Model<Restaurant>,
  ) {}

  async createRestaurant(createRestaurantDto: CreateRestaurantDto) {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return await createdRestaurant.save();
  }

  async getRestaurants(filterDto: GetRestaurantFilterDto) {
    let filter = /filterDto.search/;
    let query = this.restaurantModel.find();

    if (!filter) {
      query = this.restaurantModel.find(filter);
    }
    const restaurants = await query.exec();
    return restaurants as Restaurant[];
  }

  async getRestaurantById(id: string) {
    const restaurant = await this.findRestaurant(id);
    return restaurant as Restaurant;
  }

  async updateRestaurant(id: string, createRestaurantDto: CreateRestaurantDto) {
    const {
      name,
      description,
      gallery,
      bannerImage,
      deliveryAvailable,
      takeawayAvailable,
      dineinAvailable,
      menu,
      location,
      amenities,
      review,
      contactNumber,
    } = createRestaurantDto;
    const updateRestaurant = await this.restaurantModel.findById(id);
    updateRestaurant.name = name;
    updateRestaurant.description = description;
    updateRestaurant.gallery = gallery;
    updateRestaurant.bannerImage = bannerImage;
    updateRestaurant.deliveryAvailable = deliveryAvailable;
    updateRestaurant.takeawayAvailable = takeawayAvailable;
    updateRestaurant.dineinAvailable = dineinAvailable;
    updateRestaurant.menu = menu;
    updateRestaurant.location = location;
    updateRestaurant.amenities = amenities;
    updateRestaurant.review = review;
    updateRestaurant.contactNumber = contactNumber;
    return updateRestaurant.save();
  }

  async deleteRestaurant(id: string) {
    await this.restaurantModel.deleteOne({ _id: id }).exec();
  }

  private async findRestaurant(id: string) {
    let restaurant;
    try {
      restaurant = await this.restaurantModel.findById(id);
    } catch (e) {
      throw new NotFoundException('Could not find the restaurant');
    }
    if (!restaurant) {
      throw new NotFoundException('Could not find the restaurant');
    }
    return restaurant;
  }
}
