import { EncGroupKeyPair } from '../../encryption/EncKeyPair';
import { SymEnc, SymEncType } from '../../encryption/SymEnc';
import { ContID, GroupID, UserID, VaultID } from '../ID';
import { Permission } from './Permission';

export type GroupData = {
    gid: GroupID;
    name: string;
    vault: VaultID;
    canAccess: ContID[];
    permissions: Permission[];
    users: UserID[];
}

export type GroupCrypto = {
    symKey: SymEnc<SymEncType.GroupSymKey>;
    keyPair: EncGroupKeyPair;
}

export type FullGroupData = GroupData & GroupCrypto;
