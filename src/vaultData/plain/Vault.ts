import { ContID, VaultID } from "../ID";

type Vault = {
	id: VaultID;
	name: string;
	containers: ContID[];
}

export type PrivateVault = Vault & {isPrivate: true};
export type PublicVault = Vault & {isPrivate: false};