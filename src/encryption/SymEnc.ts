import { Binary } from "bson";

export enum SymEncType{
	FieldData,
	ItemData,

	ItemKey,
	SymKey,
	UserPrivKey,
	ContPrivKey
}

export type SymEnc<T extends SymEncType> = {
	iv: Binary;
	data: Binary;
	use: T;
}