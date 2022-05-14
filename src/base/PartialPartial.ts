/**
 * T: Original type
 * U: Mandatory properties of T
 * V: Properties that must be excluded
 */
export type PartialPartial<T, U extends keyof T, V extends keyof T> = Pick<T, U> & Partial<Omit<T, U | V>>;