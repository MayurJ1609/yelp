import { Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Restaurant extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop([String])
  gallery: string[];

  @Prop()
  bannerImage: string;

  @Prop()
  deliveryAvailable: boolean;

  @Prop()
  takeawayAvailable: boolean;

  @Prop()
  dineinAvailable: boolean;

  @Prop([String])
  menu: string[];

  @Prop()
  loc: string;

  @Prop()
  amenities: string;

  @Prop()
  review: string;

  @Prop()
  contactNumber: string;
}
