import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  gallery: { type: [String], required: true },
  bannerImage: { type: [String], required: true },
  deliveryAvailable: { type: Boolean, required: true },
  takeawayAvailable: { type: Boolean, required: true },
  dineinAvailable: { type: Boolean, required: true },
  menu: { type: [String], required: true },
  location: { type: [Number], required: true },
  amenities: { type: [String] },
  review: { type: [String] },
  contactNumber: [Number],
});

export interface Restaurant extends mongoose.Document {
  id: string;
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
