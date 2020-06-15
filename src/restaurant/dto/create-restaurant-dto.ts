export class CreateRestaurantDto {
  name: string;
  description: string;
  gallery: string[];
  bannerImage: string[];
  deliveryAvailable: boolean;
  takeawayAvailable: boolean;
  dineinAvailable: boolean;
  menu: string[];
  location: string;
  amenities: string[];
  review: string[];
  contactNumber: string[];
}
