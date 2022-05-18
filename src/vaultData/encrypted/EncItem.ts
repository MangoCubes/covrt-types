import { PartialPartial } from "../../base/PartialPartial";
import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ItemID, TempItemID } from "../ID";

export type EncItemDelta = PartialPartial<EncItem, 'id', never>;

export type EncItemData = {
	data: SymEnc<SymEncType.ItemData>;
	encKey: SymEnc<SymEncType.ItemKey>;
}

export type EncItem = EncItemData & {id: ItemID};
export type NewEncItem = EncItemData & {id: TempItemID};