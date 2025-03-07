/**
 * Capitalizes the first letter of a given string.
 *
 * @param str - The input string to capitalize.
 * @returns The input string with the first letter converted to uppercase.
 */
export function capitalize(str: string): string {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

/**
 * Separates elements of an array into multiple sub-arrays based
 * on a callback function.
 *
 * @param arr - The array to be separated.
 * @param callback - A function that determines the index
 *        of the subarray where each element should be placed.
 * @returns {T[][]} An array of subarrays, where elements are grouped based on the callback's return value.
 */
export function separateBy<T = unknown>(
  arr: T[],
  callback: (item: T, index: number) => number
): T[][] {
  return arr.reduce<T[][]>((acc, item, index) => {
    const targetIndex = callback(item, index);

    if (!acc[targetIndex]) acc[targetIndex] = [];

    acc[targetIndex].push(item);

    return acc;
  }, []);
}
