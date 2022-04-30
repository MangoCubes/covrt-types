import { Binary } from "bson";

export enum PubKeyType{
	Group,
	User
}

export type PubKey<T extends PubKeyType> = {
	type: T,
	data: Binary;
}