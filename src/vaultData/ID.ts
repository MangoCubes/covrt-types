export enum DataType{
	Vault,
	Item,
	TempItem,
	Field,
	TempField,
	User,
	Log,
	Group,
	Container
}

export type DataID<T extends DataType> = string & {__name: T};

export type VaultID = DataID<DataType.Vault>;
export type ItemID = DataID<DataType.Item>;
export type TempItemID = DataID<DataType.TempItem>;
export type FieldID = DataID<DataType.Field>;
export type TempFieldID = DataID<DataType.TempField>;
export type UserID = DataID<DataType.User>;
export type LogID = DataID<DataType.Log>;
export type GroupID = DataID<DataType.Group>;
export type ContID = DataID<DataType.Container>;

export type AnyID = DataID<DataType>;