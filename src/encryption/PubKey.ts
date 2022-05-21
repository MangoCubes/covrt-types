import { Binary } from "bson";
import { KeyPairType } from "./EncKeyPair";

export type ExportedPubKey<T extends KeyPairType> = Binary & {__type: T};