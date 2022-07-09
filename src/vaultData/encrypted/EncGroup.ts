import { AsymEnc, AsymEncType } from '../../encryption/AsymEnc';
import { EncKeyPair, KeyPairType } from '../../encryption/EncKeyPair';
import { SymEnc, SymEncType } from '../../encryption/SymEnc';
import { GroupID, UserID, VaultID } from '../ID';
import { Permission } from '../plain/Permission';

type BaseGroupData = {
	gid: GroupID;
	vault: VaultID;
	permissions: Permission[];
}

export type GroupCrypto = {
	data: SymEnc<SymEncType.GroupInfo>;
	symKey: AsymEnc<AsymEncType.GroupSymKey>;
	keyPair: EncKeyPair<KeyPairType.Group>;
}

export type GroupAdminData = {
	users: UserID[];
}

export type GroupData = BaseGroupData & GroupCrypto;

export type FullGroupData = GroupData & GroupAdminData;
