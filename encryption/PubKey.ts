import { Binary } from "bson";

export enum PubKeyType{
	Group = 'Group',
}

export interface PubKey<T extends PubKeyType>{
	type: T,
	data: Binary;
}