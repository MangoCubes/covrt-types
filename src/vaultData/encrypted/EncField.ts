import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID, TempFieldID } from "../ID";

export type EncFieldData = {
    data: SymEnc<SymEncType.FieldData>;
}

export type EncField = EncFieldData & {id: FieldID};
export type NewEncField = EncFieldData & {id: TempFieldID};