/**
 * Permission controls what user can do
 * This should only be used for types that cannot be controlled cryptographically (Such as inviting user)
 */
export enum PermType{
	CreateItem = 1,
	ViewLog,
	ViewDeleted,
	Invite,
	CreateGroup,
}

export type Permission = {
    action: PermType;
}