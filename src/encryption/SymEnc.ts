import { Binary } from "bson";

export enum SymEncType{
	FieldData = 1,
	ItemData,

	ItemKey,
	UserSymKey,
	VaultKey,

	UserPrivKey,
	GroupPrivKey,
	ContainerPrivKey,

	ContainerInfo,
	GroupInfo,
	GroupPubInfo
}

export type SymEnc<T extends SymEncType> = Binary & {__use: T};