import type { BaseSyntheticEvent, HtmlHTMLAttributes } from 'react';
import { z } from 'zod';
import { isNotEmptyArray, isPhoneNumber } from '../../utils/type';

export type DynamicDropdownValues<T> = {
  occasions: T[];
  timeSlots: T[];
};

export const getBookingSchema = ({
  occasions,
  timeSlots,
}: DynamicDropdownValues<string>) =>
  z.object({
    date: z.string().min(1, 'Date is required'),
    time: isNotEmptyArray(timeSlots)
      ? z.enum(timeSlots, {
          invalid_type_error: 'Please choose a valid option',
          message: 'Please choose a valid option',
          required_error: 'Time is required',
        })
      : z.string().min(1, 'Time is required'),
    guests: z
      .number()
      .min(1, 'At least 1 guest required')
      .max(20, 'Max 20 guests allowed'),
    occasion: isNotEmptyArray(occasions)
      ? z
          .enum(occasions, { message: 'Please choose a valid option' })
          .optional()
      : z.string().optional(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().optional(),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),
    phone: z
      .string()
      .optional()
      .refine(isPhoneNumber, 'Please enter a valid phone number'),
    specialRequest: z.string().optional(),
  });

export type BookingFormData = z.infer<ReturnType<typeof getBookingSchema>>;

export type GetTimeSlotsHandler = (date: string) => Promise<string[]>;
export type GetOccasionsHandler = () => Promise<string[]>;
export type SubmitFormHandler = (
  values: BookingFormData,
  event?: BaseSyntheticEvent
) => void;

export interface BookingFormProps extends HtmlHTMLAttributes<HTMLDivElement> {
  defaultValues?: Partial<BookingFormData> | null;
  getTimeSlots: GetTimeSlotsHandler;
  getOccasions: GetOccasionsHandler;
  onSubmitForm: SubmitFormHandler;
}
