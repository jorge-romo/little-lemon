import type { ComponentPropsWithRef } from 'react';

export interface TestimonialCardProps extends ComponentPropsWithRef<'div'> {
  rating: number;
  customerImg: string;
  customerName: string;
  testimonial: string;
}

export const starMap: Record<string, string> = {
  1: '★☆☆☆☆',
  2: '★★☆☆☆',
  3: '★★★☆☆',
  4: '★★★★☆',
  5: '★★★★★',
};
