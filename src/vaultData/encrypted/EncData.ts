import { DataType } from "../ID";
import { EncField } from "./EncField";
import { EncItem } from "./EncItem";

export type EncData = {
	[DataType.Field]: EncField;
	[DataType.Item]: EncItem;
}