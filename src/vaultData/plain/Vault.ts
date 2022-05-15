import { ContID, VaultID } from "../ID";

type Vault = {
	vid: VaultID;
	name: string;
	containers: ContID[];
}

export type PrivateVault = Vault & {isPrivate: true};
export type PublicVault = Vault & {isPrivate: false};