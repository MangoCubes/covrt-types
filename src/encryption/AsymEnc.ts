import { Binary } from "bson";
import { KeyPairType } from "./EncKeyPair";

export enum AsymEncType{
	GroupSymKey,
	ContainerSymKey,
}

/**
 * Key represents a key pair type.
 * 
 * Value represents what this key pair can decrypt.
 * 
 * (X can decrypt Y)
 */
export type AsymDecMap = {
	[KeyPairType.User]: AsymEncType.GroupSymKey;
	[KeyPairType.Group]: AsymEncType.ContainerSymKey;
}

export type AsymEnc<T extends AsymEncType> = Binary & {__use: T};