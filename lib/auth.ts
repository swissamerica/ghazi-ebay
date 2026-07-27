import { cookies } from "next/headers";

const COOKIE_NAME = "tradehub_session";

export async function setSessionCookie(id: string) {
    const store = await cookies();

    store.set(COOKIE_NAME, id, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30
    });
}

export async function clearSessionCookie() {
    const store = await cookies();

    store.delete(COOKIE_NAME);
}

export async function getSessionCookie() {
    const store = await cookies();

    return store.get(COOKIE_NAME)?.value;
}
