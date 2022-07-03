import { PartialPartial } from "../../base/PartialPartial";
import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ItemID } from "../ID";
import { EncFieldData } from "./EncField";

export type EncItemDelta = PartialPartial<EncItem, 'id', never>;

export type EncItemData = {
	data: SymEnc<SymEncType.ItemData>;
	encKey: SymEnc<SymEncType.ItemKey>;
}

export type EncGroupedItemData = EncItemData & {
	fields: EncFieldData[];
}

export type EncItem = EncItemData & {id: ItemID};