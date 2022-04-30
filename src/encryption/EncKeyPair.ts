import { PubKey, PubKeyType } from "./PubKey";
import { SymEnc, SymEncType } from "./SymEnc";

export type EncUserKeyPair = {
	priv: SymEnc<SymEncType.UserPrivKey>;
	pub: PubKey<PubKeyType.User>;
}

export type EncGroupKeyPair = {
	priv: SymEnc<SymEncType.GroupPrivKey>;
	pub: PubKey<PubKeyType.Group>;
}