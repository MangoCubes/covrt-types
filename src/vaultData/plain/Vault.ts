import { GroupID, VaultID } from "../ID";

type VaultTemplate = {
	vid: VaultID;
	name: string;
	group: GroupID;
}

type PublicVaultData = {
	owner: string;
}

export type PrivateVault = VaultTemplate & {isPrivate: true};
export type PublicVault = VaultTemplate & {isPrivate: false} & PublicVaultData;
export type Vault = PrivateVault | PublicVault;