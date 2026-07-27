import { randomUUID } from "crypto";

export function createSessionId() {
    return randomUUID();
}

export function sessionExpiration() {
    return Date.now() + 1000 * 60 * 60 * 24 * 30;
}
