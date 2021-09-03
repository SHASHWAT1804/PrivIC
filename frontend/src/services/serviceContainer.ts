import type { Identity } from "@dfinity/agent";
import type {
    ConfirmCodeResponse,
    PhoneNumber,
    Profile,
    RegisterPhoneResponse,
    SendCodeResponse,
} from "../domain/identity/identity";
import { IdentityClient } from "./identity/identity.client";
import type { IIdentityClient } from "./identity/identity.client.interface";

export class ServiceContainer {
    private _identityClient: IIdentityClient;

    constructor(private identity: Identity) {
        this._identityClient = IdentityClient.create(identity);
    }

    getProfile(): Promise<Profile> {
        return this._identityClient.getProfile();
    }

    registerPhoneNumber(phoneNumber: PhoneNumber): Promise<RegisterPhoneResponse> {
        return this._identityClient.registerPhoneNumber(phoneNumber);
    }

    sendVerificationCode(id: bigint): Promise<SendCodeResponse> {
        return this._identityClient.sendVerificationCode(id);
    }

    confirmVerificationCode(id: bigint, code: string): Promise<ConfirmCodeResponse> {
        return this._identityClient.confirmVerificationCode(id, code);
    }
}