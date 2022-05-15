/**
 * T: Original type
 * U: Mandatory properties of T
 * V: Properties that must be excluded
 * Other properties not mentioned in U and V are considered optional
 */
export type PartialPartial<T, U extends keyof T, V extends keyof T> = Pick<T, U> & Partial<Omit<T, U | V>>;