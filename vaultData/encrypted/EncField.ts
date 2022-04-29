import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID, ItemID } from "../ID";

export interface EncField{
    key: FieldID;
    data: SymEnc<SymEncType.FieldData>;
	item: ItemID;
}