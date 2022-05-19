import { ExportedPubKey, PubKeyType } from "./PubKey";
import { SymEnc, SymEncType } from "./SymEnc";

export type EncUserKeyPair = {
	priv: SymEnc<SymEncType.UserPrivKey>;
	pub: ExportedPubKey<PubKeyType.User>;
}

export type EncGroupKeyPair = {
	priv: SymEnc<SymEncType.GroupPrivKey>;
	pub: ExportedPubKey<PubKeyType.Group>;
}

export type EncContainerKeyPair = {
	priv: SymEnc<SymEncType.ContainerPrivKey>;
	pub: ExportedPubKey<PubKeyType.Container>;
}

export type EncKeyPair = EncUserKeyPair | EncGroupKeyPair | EncContainerKeyPair;