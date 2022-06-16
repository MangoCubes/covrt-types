import { Binary } from "bson";

export enum SymEncType{
	FieldData = 1,
	ItemData,

	ItemKey,
	UserSymKey,

	UserPrivKey,
	GroupPrivKey,
	ContainerPrivKey
}

export type SymEnc<T extends SymEncType> = Binary & {__use: T};