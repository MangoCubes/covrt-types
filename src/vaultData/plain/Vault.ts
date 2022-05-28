import { GroupID, VaultID } from "../ID";

type VaultTemplate = {
	vid: VaultID;
	name: string;
	defaultGroup: GroupID;
}

export type PrivateVault = VaultTemplate & {isPrivate: true};
export type PublicVault = VaultTemplate & {isPrivate: false};
export type Vault = PrivateVault | PublicVault;