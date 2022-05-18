import { VaultID } from "../ID";

type VaultTemplate = {
	vid: VaultID;
	name: string;
}

export type PrivateVault = VaultTemplate & {isPrivate: true};
export type PublicVault = VaultTemplate & {isPrivate: false};
export type Vault = PrivateVault | PublicVault;