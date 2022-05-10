import { Binary } from "bson";

export enum SymEncType{
	FieldData,
	ItemData,

	ItemKey,
	UserSymKey,
	GroupSymKey,
	ContSymKey,

	UserPrivKey,
	GroupPrivKey,
	ContPrivKey
}

export type SymEnc<T extends SymEncType> = {
	iv: Binary;
	data: Binary;
	use: T;
}