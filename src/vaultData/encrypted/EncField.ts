import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID, ItemID, TempFieldID } from "../ID";

export type EncFieldData = {
    data: SymEnc<SymEncType.FieldData>;
}

export type EncField = EncFieldData & {
	id: FieldID;
	item: ItemID;
};
export type NewEncField = EncFieldData & {id: TempFieldID};