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

export type EncKeyPair = EncUserKeyPair | EncGroupKeyPair;