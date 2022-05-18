import { EncContKeyPair } from "../../encryption/EncKeyPair";
import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ContID, VaultID } from "../ID";
import { EncField } from "./EncField";
import { EncItem } from "./EncItem";

type EncContainerBase = {
	cid: ContID;
	vault: VaultID;
}

type EncContainerCrypto = {
	symKey: SymEnc<SymEncType.ContSymKey>;
    keyPair: EncContKeyPair;
}

export type EncContainer = EncContainerBase & EncContainerCrypto;

export type EncContainerData = {
	fields: EncField[];
	items: EncItem[];
}