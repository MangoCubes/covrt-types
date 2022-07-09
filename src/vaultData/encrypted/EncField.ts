import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID, ItemID } from "../ID";

export type EncFieldData = {
	data: SymEnc<SymEncType.FieldData>;
}

export type EncField = EncFieldData & {
	id: FieldID;
	item: ItemID;
};