export enum IDType{
	Vault,
	Item,
	Field,
	User,
	Log,
	Group
}

export type DataID<T extends IDType> = string & {__name: T};

export type VaultID = DataID<IDType.Vault>;
export type ItemID = DataID<IDType.Item>;
export type FieldID = DataID<IDType.Field>;
export type UserID = DataID<IDType.User>;
export type LogID = DataID<IDType.Log>;
export type GroupID = DataID<IDType.Group>;

export type AnyID = DataID<IDType>;