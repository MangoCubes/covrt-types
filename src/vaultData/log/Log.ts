import { EncData } from "../encrypted/EncData";
import { DataID, DataType, LogID, UserID } from "../ID";

export type Log<T extends DataType> = {
	id: LogID;
	timestamp: Date;
	dataType: T;
	objid: DataID<T>;
	data: T extends keyof EncData ? EncData[T] : null;
	user: UserID | null;
}