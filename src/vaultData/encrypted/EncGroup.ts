import { AsymEnc, AsymEncType } from '../../encryption/AsymEnc';
import { EncKeyPair, KeyPairType } from '../../encryption/EncKeyPair';
import { SymEnc, SymEncType } from '../../encryption/SymEnc';
import { GroupID, UserID, VaultID } from '../ID';
import { Permission } from '../plain/Permission';

export type BaseGroupData = {
	gid: GroupID;
	vault: VaultID;
	permissions: Permission;
	pubData: SymEnc<SymEncType.GroupPubInfo>;
}

export type GroupCrypto = {
	vKey: SymEnc<SymEncType.VaultKey>;
	data: SymEnc<SymEncType.GroupInfo>;
	keyPair: EncKeyPair<KeyPairType.Group>;
}

export type GroupAccessData = {
	accessKey: SymEnc<SymEncType.GroupSymKey>;
	parent: GroupID;
}

export type GroupAdminData = {
	users: UserID[];
}

export type GroupData = BaseGroupData & GroupCrypto;

export type UserGroupData = GroupData & {symKey: AsymEnc<AsymEncType.GroupSymKey>};

export type GroupAccess = GroupData & GroupAccessData;

export type FullGroupData = GroupData & GroupAdminData;
