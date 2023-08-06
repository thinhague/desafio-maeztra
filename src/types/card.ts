import type { ImageProps } from './image'
export interface ICard {
  image: ImageProps;
  colors: string[];
  price: number;
  title: string;
  subtitle: string;
}
