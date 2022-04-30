export enum DataType{
	Vault,
	Item,
	Field,
	User,
	Log,
	Group
}

export type DataID<T extends DataType> = string & {__name: T};

export type VaultID = DataID<DataType.Vault>;
export type ItemID = DataID<DataType.Item>;
export type FieldID = DataID<DataType.Field>;
export type UserID = DataID<DataType.User>;
export type LogID = DataID<DataType.Log>;
export type GroupID = DataID<DataType.Group>;

export type AnyID = DataID<DataType>;