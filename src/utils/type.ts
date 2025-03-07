/**
 * Type guard to check if a value is not null or undefined.
 *
 * @param v - The value to check.
 * @returns `true` if the value is not null or undefined, otherwise `false`.
 */
export function notEmpty<T = unknown>(v: T | undefined | null): v is T {
  return v !== undefined && v !== null;
}

/**
 * Returns the first non-null, non-undefined value from a list of values.
 *
 * @param {...unknown[]} values - A list of values to check.
 * @returns {T | undefined} The first non-null, non-undefined value, or `undefined` if all are null/undefined.
 */
export function returnNotEmpty<T = unknown>(
  ...values: (T | undefined | null)[]
): T | undefined {
  return values.find(notEmpty<T>);
}

/**
 * Phone number mask pattern.
 * Example format: (123) 456-7890
 */
export const phoneMask = '(999) 999-9999';

/**
 * Validates if a given string matches the expected phone number format.
 *
 * @param value - The phone number to validate.
 * @returns `true` if the value is a valid phone number format or empty, otherwise `false`.
 */
export function isPhoneNumber(value: string | undefined): value is string {
  if (typeof value !== 'string') return false;
  if (!value) return true;

  const phoneRegex = new RegExp(
    '^' + phoneMask.replace(/[^\w\s\d]/g, '\\$&').replace(/\d/g, '\\d') + '$'
  );
  return phoneRegex.test(value);
}

/**
 * Type guard to check if an array is not empty.
 *
 * @param arr - The value to check.
 * @returns `true` if the value is a non-empty array, otherwise `false`.
 */
export function isNotEmptyArray<T>(arr: T[]): arr is [T, ...T[]] {
  return Array.isArray(arr) && arr.length > 0;
}
