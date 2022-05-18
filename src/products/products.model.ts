import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}
