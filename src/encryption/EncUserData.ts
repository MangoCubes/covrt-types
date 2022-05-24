import { SymEnc, SymEncType } from "./SymEnc";
import { UserID } from "../vaultData/ID";
import { EncKeyPair, KeyPairType } from "./EncKeyPair";

export type EncUserData = {
	uid: UserID;
	sym: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncKeyPair<KeyPairType.User>;
}