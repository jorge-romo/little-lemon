import type { ComponentPropsWithRef } from 'react';

export interface SpecialFoodCardProps extends ComponentPropsWithRef<'div'> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}
