import { AsymEnc, AsymEncType } from '../../encryption/AsymEnc';
import { EncKeyPair, KeyPairType } from '../../encryption/EncKeyPair';
import { ContainerID, GroupID, UserID, VaultID } from '../ID';
import { Permission } from './Permission';

type BaseGroupData = {
    gid: GroupID;
    name: string;
    vault: VaultID;
    permissions: Permission[];
}

export type GroupCrypto = {
    symKey: AsymEnc<AsymEncType.GroupSymKey>;
    keyPair: EncKeyPair<KeyPairType.Group>;
}

export type GroupAdminData = {
	users: UserID[];
}

export type GroupData = BaseGroupData & GroupCrypto & {canAccess: ContainerID[]};

export type FullGroupData = BaseGroupData & GroupCrypto & GroupAdminData;
