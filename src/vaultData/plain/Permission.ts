import { ContainerID } from "../ID";

/**
 * Permission controls what user can do
 * This should only be used for types that cannot be controlled cryptographically (Such as inviting user)
 */
export enum PermType{
	/**
	 * Having this permission is equivalent to having all permissions listed below, and grants permission to rename and delete vault
	 */
	Admin,

	/**
	 * Create and edit items, limited to targeted containers
	 */
	EditItem, 
	/**
	 * Create and edit groups
	 */
	EditGroup,
	/**
	 * Create and edit containers itself, not the contents
	 */
	EditContainer,

	/**
	 * Delete items from containers this group users can access, limited to targeted containers
	 */
	DeleteItem,
	/**
	 * Delete groups this group has created
	 */
	DeleteGroup,
	/**
	 * Delete containers, naturally limited to containers this group users can access
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
export type Targeted = PermType.ViewItemLog | PermType.ViewContainerLog | PermType.EditItem | PermType.DeleteItem;
export type Untargeted = Exclude<PermType, Targeted>;

export type PermissionWithoutTarget = {[key in Untargeted]: boolean};

export type PermissionWithTarget = {[key in Targeted]: boolean};

export type Permission = {
	group: PermissionWithoutTarget;
	container: {[cid: ContainerID]: PermissionWithTarget};
};