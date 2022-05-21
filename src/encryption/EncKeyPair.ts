import { ExportedPubKey } from "./PubKey";
import { SymEnc, SymEncType } from "./SymEnc";

export enum KeyPairType {
	User,
	Group,
	Container
}

export type EncUserKeyPair = {
	priv: SymEnc<SymEncType.UserPrivKey>;
	pub: ExportedPubKey<KeyPairType.User>;
}

export type EncGroupKeyPair = {
	priv: SymEnc<SymEncType.GroupPrivKey>;
	pub: ExportedPubKey<KeyPairType.Group>;
}

export type EncContainerKeyPair = {
	priv: SymEnc<SymEncType.ContainerPrivKey>;
	pub: ExportedPubKey<KeyPairType.Container>;
}

export type EncKeyPair = EncUserKeyPair | EncGroupKeyPair | EncContainerKeyPair;