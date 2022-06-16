import { EncData } from "../encrypted/EncData";
import { DataID, DataType, LogID, UserID } from "../ID";

export enum FieldAction{
	Created = 1,
	Updated,
	Deleted
}

export enum ItemAction{
	Created = 1,
	Updated,
	Deleted,
	Moved,
	Copied
}

export enum GroupAction{
	Created = 1,
	Updated,
	Deleted,
	UserAdded,
	UserRemoved,
}

export type Action = {
	[DataType.Field]: FieldAction;
	[DataType.Group]: GroupAction;
	[DataType.Item]: ItemAction;
}

export type Log<T extends keyof Action> = {
	id: LogID;
	timestamp: Date;
	dataType: T;
	objid: DataID<T>;
	data: T extends keyof EncData ? EncData[T] : null;
	user: UserID | null;
	action: Action[T];
}