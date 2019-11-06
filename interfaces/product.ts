import { Image } from './common';

export interface GridProduct {
  id: string;
  title: string;
  price: string;
  images: Image[];
  handle: string;
  availableForSale: boolean;
}
