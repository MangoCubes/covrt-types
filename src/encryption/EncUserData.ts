
import { EncUserKeyPair } from "./EncKeyPair";
import { SymEnc, SymEncType } from "./SymEnc";
import { UserID } from "../vaultData/ID";

export type EncUserData = {
	uid: UserID;
	sym: SymEnc<SymEncType.UserSymKey>;
	keyPair: EncUserKeyPair
}