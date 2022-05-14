import { PartialPartial } from "../../base/PartialPartial";
import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ContID, ItemID } from "../ID";

export type EncItemDelta = PartialPartial<EncItem, 'id', never>;

export type EncItem = {
	id: ItemID;
	data: SymEnc<SymEncType.ItemData>;
	encKey: SymEnc<SymEncType.ItemKey>;
	container: ContID;
}