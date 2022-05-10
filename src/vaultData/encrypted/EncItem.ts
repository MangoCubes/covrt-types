import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { ItemID } from "../ID";

export type EncItem = {
	id: ItemID;
	data: SymEnc<SymEncType.ItemData>;
	encKey: SymEnc<SymEncType.ItemKey>;
}