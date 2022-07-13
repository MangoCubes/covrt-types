import { ContainerID, GroupID } from "../ID";

/**
 * Permission controls what user can do
 * This should only be used for types that cannot be controlled cryptographically (Such as inviting user)
 */
export enum PermType{
	/**
	 * Having this permission is equivalent to having all permissions listed below, and grants permission to rename and delete vault
	 */
	Admin = -1,

	/**
	 * Create and edit items
	 */
	EditItem = 1, 
	/**
	 * Create and edit groups
	 */
	EditGroup,
	/**
	 * Create and edit containers
	 */
	EditContainer,

	/**
	 * Delete items from containers this group users can access
	 */
	DeleteItem,
	/**
	 * Delete groups this group has created
	 */
	DeleteGroup,
	/**
	 * Delete specified container, naturally limited to containers this group users can access
	 */
	DeleteContainer,

	/**
	 * View logs of items in a specified container
	 */
	ViewItemLog,
	/**
	 * View logs of a specified group
	 */
	ViewGroupLog,
	/**
	 * View logs of a specified container itself (such as access logs)
	 */
	ViewContainerLog,

	/**
	 * Invite users to a specified group, naturally limited to groups user's group and its children
	 */
	Invite
}
type Targeted = PermType.ViewItemLog | PermType.ViewContainerLog;

export type PermissionWithoutTarget = {
	action: Exclude<PermType, Targeted>;
}

export type PermissionWithTarget = {
	action: Targeted;
	cid: ContainerID;
}

export type Permission = {
	group: PermissionWithoutTarget[];
	container: PermissionWithTarget[];
};