import { Vault } from "../plain/Vault";
import { FullEncContainerData } from "./EncContainer";
import { GroupData } from "./EncGroup";

export type EncVault = {
	containers: FullEncContainerData[];
	group: GroupData;
	vault: Vault;
}