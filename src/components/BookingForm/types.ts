import type { BaseSyntheticEvent, HtmlHTMLAttributes } from 'react';
import { z } from 'zod';
import { isPhoneNumber } from '../../utils/type';

export const bookingSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  guests: z
    .number()
    .min(1, 'At least 1 guest required')
    .max(10, 'Max 10 guests allowed'),
  occasion: z.string().optional(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address.'),
  phone: z
    .string()
    .optional()
    .refine(isPhoneNumber, 'Please enter a valid phone number.'),
  specialRequest: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export type GetTimeSlotsHandler = (date: string) => Promise<string[]>;
export type GetOccasionsHandler = () => Promise<string[]>;
export type SubmitFormHandler = (
  values: BookingFormData,
  event?: BaseSyntheticEvent
) => void;

export interface BookingFormProps extends HtmlHTMLAttributes<HTMLDivElement> {
  data?: Partial<BookingFormData> | null;
  getTimeSlots: GetTimeSlotsHandler;
  getOccasions: GetOccasionsHandler;
  onSubmitForm: SubmitFormHandler;
}
