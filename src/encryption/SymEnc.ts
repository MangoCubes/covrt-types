import { Binary } from "bson";

export enum SymEncType{
	FieldData,
	ItemData,

	ItemKey,
	UserSymKey,
	GroupSymKey,
	ContainerSymKey,

	UserPrivKey,
	GroupPrivKey,
	ContainerPrivKey
}

export type SymEnc<T extends SymEncType> = Binary & {__use: T};