import { SymEnc, SymEncType } from "../../encryption/SymEnc";
import { FieldID } from "../ID";

export type EncField = {
    id: FieldID;
    data: SymEnc<SymEncType.FieldData>;
}