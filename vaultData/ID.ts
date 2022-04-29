import { Branded } from "../general/Branded";

export type VaultID = Branded<string, 'VaultID'>;
export type ItemID = Branded<string, 'ItemID'>;
export type FieldID = Branded<string, 'FieldID'>;
export type UserID = Branded<string, 'UserID'>;
export type LogID = Branded<string, 'LogID'>;
export type GroupID = Branded<string, 'GroupID'>;

export type DataID = VaultID | ItemID | FieldID | UserID | LogID | GroupID;