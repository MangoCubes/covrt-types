import { AnyID } from "./ID";

export type Permission = {
    action: string;
    target: AnyID | null;
}