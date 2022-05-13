import { ContID, VaultID } from "../ID";
import { EncField } from "./EncField";
import { EncItem } from "./EncItem";

export type EncContainerDelta = Pick<EncContainer, 'id'> & Partial<Omit<EncContainer, 'id'>>;

export type EncContainer = {
	id: ContID;
	fields: EncField[];
	items: EncItem[];
	vault: VaultID;
}