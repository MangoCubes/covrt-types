import { Binary } from "bson";

export enum AsymEncType{
	GroupSymKey,
	ContainerSymKey,
}

export type AsymEnc<T extends AsymEncType> = Binary & {__use: T};