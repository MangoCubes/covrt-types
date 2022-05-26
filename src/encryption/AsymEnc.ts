import { Binary } from "bson";
import { KeyPairType } from "./EncKeyPair";

export enum AsymEncType{
	GroupSymKey,
	ContainerSymKey,
}

export type AsymEncMap = {
	[AsymEncType.GroupSymKey]: KeyPairType.User;
	[AsymEncType.ContainerSymKey]: KeyPairType.Group;
}

export type AsymEnc<T extends AsymEncType> = Binary & {__use: T};