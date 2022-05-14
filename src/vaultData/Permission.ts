import { AnyID } from "./ID";

export enum PermissionText{
    
}

export type Permission = {
    action: string;
    target: AnyID | null;
}