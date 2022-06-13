import { ExportedPubKey } from "./PubKey";
import { SymEnc, SymEncType } from "./SymEnc";

export enum KeyPairType {
	User,
	Group,
	Container
}

/**
 * Key represents a private key type.
 * 
 * Value represents its encrypted type.
 * 
 * (X gets encrypted to Y)
 */
export type PrivKeyEncMap = {
	[KeyPairType.User]: SymEncType.UserPrivKey;
	[KeyPairType.Group]: SymEncType.GroupPrivKey;
	[KeyPairType.Container]: SymEncType.ContainerPrivKey;
}

/**
 * Key represents an encrypted private key type.
 * 
 * Value represents its decrypted type.
 * 
 * (X gets decrypted to Y)
 */
export type EncPrivKeyDecMap = {
	[SymEncType.UserPrivKey]: KeyPairType.User;
	[SymEncType.GroupPrivKey]: KeyPairType.Group;
	[SymEncType.ContainerPrivKey]: KeyPairType.Container;
}

export type EncKeyPair<T extends KeyPairType> = {
	priv: SymEnc<PrivKeyEncMap[T]>;
	pub: ExportedPubKey<T>;
}