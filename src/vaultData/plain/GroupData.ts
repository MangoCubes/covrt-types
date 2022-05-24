import { EncKeyPair, KeyPairType } from '../../encryption/EncKeyPair';
import { SymEnc, SymEncType } from '../../encryption/SymEnc';
import { ContainerID, GroupID, UserID, VaultID } from '../ID';
import { Permission } from './Permission';

type BaseGroupData = {
    gid: GroupID;
    name: string;
    vault: VaultID;
    permissions: Permission[];
}

export type GroupCrypto = {
    symKey: SymEnc<SymEncType.GroupSymKey>;
    keyPair: EncKeyPair<KeyPairType.Group>;
}

export type GroupAdminData = {
	users: UserID[];
}

export type GroupData = BaseGroupData & GroupCrypto & {canAccess: ContainerID[]};

export type FullGroupData = BaseGroupData & GroupCrypto & GroupAdminData;
