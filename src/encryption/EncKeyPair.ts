import { ExportedPubKey } from "./PubKey";
import { SymEnc, SymEncType } from "./SymEnc";

export enum KeyPairType {
	User,
	Group,
	Container
}

export type EncPrivKeyMap = {
	[KeyPairType.User]: SymEncType.UserPrivKey;
	[KeyPairType.Group]: SymEncType.GroupPrivKey;
	[KeyPairType.Container]: SymEncType.ContainerPrivKey;
}

export type EncKeyPair<T extends KeyPairType> = {
	priv: SymEnc<EncPrivKeyMap[T]>;
	pub: ExportedPubKey<T>;
}