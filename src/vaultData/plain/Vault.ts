import { ContID, VaultID } from "../ID";

export type Vault = {
	id: VaultID;
	isPrivate: boolean;
	name: string;
	containers: ContID[];
}