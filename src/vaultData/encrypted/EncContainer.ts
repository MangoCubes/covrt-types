import { EncKeyPair, KeyPairType } from "../../encryption/EncKeyPair";
import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ContainerID, VaultID } from "../ID";
import { EncField } from "./EncField";
import { EncItem } from "./EncItem";

export type ContainerBase = {
	cid: ContainerID;
	name: string;
	vault: VaultID;
}

type EncContainerCrypto = {
	symKey: SymEnc<SymEncType.ContainerSymKey>;
    keyPair: EncKeyPair<KeyPairType.Container>;
}

export type EncContainer = ContainerBase & EncContainerCrypto;

export type EncContainerData = {
	fields: EncField[];
	items: EncItem[];
}