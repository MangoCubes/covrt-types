import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID, ItemID } from "../ID";

export type EncField = {
    key: FieldID;
    data: SymEnc<SymEncType.FieldData>;
	item: ItemID;
}