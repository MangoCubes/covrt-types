import { Binary } from "bson";

export enum PubKeyType{
	Group = 'Group',
}

export type PubKey<T extends PubKeyType> = {
	type: T,
	data: Binary;
}