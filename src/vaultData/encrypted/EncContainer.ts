import { PartialPartial } from "../../base/PartialPartial";
import { ContID, VaultID } from "../ID";
import { EncField } from "./EncField";
import { EncItem } from "./EncItem";

export type EncContainerDelta = PartialPartial<EncContainer, 'id', 'vault'>;

export type EncContainer = {
	id: ContID;
	fields: EncField[];
	items: EncItem[];
	vault: VaultID;
}