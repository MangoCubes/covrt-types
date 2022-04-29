import { Binary } from "bson";

export enum SymEncType{
	FieldData,
	ItemData,

	ItemKey,
}

export interface SymEnc<T extends SymEncType>{
	iv: Binary;
	data: Binary;
	use: T;
}