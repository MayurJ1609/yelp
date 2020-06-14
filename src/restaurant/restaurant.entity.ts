import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  gallery: string[];

  @Column()
  bannerImage: string;

  @Column()
  deliveryAvailable: boolean;

  @Column()
  takeawayAvailable: boolean;

  @Column()
  dineinAvailable: boolean;

  @Column()
  menu: string[];

  @Column()
  location: string;

  @Column()
  amenities: string;

  @Column()
  review: string;

  @Column()
  contactNumber: string;
}
