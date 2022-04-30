import { Binary } from "bson";

export type VerificationKey = {
	type: 'Verification';
	data: Binary;
}