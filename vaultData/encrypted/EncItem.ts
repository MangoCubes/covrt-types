import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ItemID } from "../ID";

export interface EncItem{
	key: ItemID;
	data: SymEnc<SymEncType.ItemData>;
	folder: ItemID | null;
	encKey: SymEnc<SymEncType.ItemKey>;
}