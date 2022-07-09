import { AsymEnc, AsymEncType } from '../../encryption/AsymEnc';
import { EncKeyPair, KeyPairType } from '../../encryption/EncKeyPair';
import { GroupID, UserID, VaultID } from '../ID';
import { Permission } from '../plain/Permission';
import { EncGroupInfo } from './EncGroupInfo';

type BaseGroupData = {
	gid: GroupID;
	vault: VaultID;
	permissions: Permission[];
	info: EncGroupInfo;
}

export type GroupCrypto = {
	symKey: AsymEnc<AsymEncType.GroupSymKey>;
	keyPair: EncKeyPair<KeyPairType.Group>;
}

export type GroupAdminData = {
	users: UserID[];
}

export type GroupData = BaseGroupData & GroupCrypto;

export type FullGroupData = GroupData & GroupAdminData;
