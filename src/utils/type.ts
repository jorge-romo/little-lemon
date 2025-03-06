export function notEmpty<T>(v: null | undefined | T): v is T {
  return v !== undefined && v !== null;
}

export function returnNotEmpty<T>(
  ...values: (null | undefined | T)[]
): T | undefined {
  return values.find(notEmpty);
}

export const phoneMask = '(999) 999-9999';
export function isPhoneNumber(value: string | undefined): boolean {
  if (!value) return true;

  const phoneRegex = new RegExp(
    '^' + phoneMask.replace(/[^\w\s\d]/g, '\\$&').replace(/\d/g, '\\d') + '$'
  );
  return phoneRegex.test(value);
}

export function isNotEmptyArray<T = unknown>(
  arr: T[] | null | undefined
): arr is [T, ...T[]] {
  return !!arr && arr.length > 0;
}
