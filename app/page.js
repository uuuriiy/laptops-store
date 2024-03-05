'use client';

import { signOut } from 'next-auth/react';

export default function Home() {
    return (
        <main>
            Hello
            <button onClick={() => signOut()}>Sign out</button>
        </main>
    );
}
