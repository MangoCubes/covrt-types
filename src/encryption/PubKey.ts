import { Binary } from "bson";

export enum PubKeyType{
	Group,
	User,
	Container
}

export type ExportedPubKey<T extends PubKeyType> = Binary & {__type: T};