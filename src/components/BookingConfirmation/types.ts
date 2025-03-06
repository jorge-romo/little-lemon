import type { HtmlHTMLAttributes, MouseEventHandler } from 'react';
import { BookingFormData } from '../BookingForm';

export type ConfirmBookingHandler = MouseEventHandler<HTMLButtonElement>;
export type EditBookingHandler = MouseEventHandler<HTMLButtonElement>;

export interface BookingConfirmationProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  data: BookingFormData;
  onConfirmBooking: ConfirmBookingHandler;
  onEditBooking: EditBookingHandler;
}
