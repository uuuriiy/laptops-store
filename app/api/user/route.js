import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { hash } from 'bcrypt';
import {
    sendVerificationEmail,
    generateEmailVerificationToken,
} from '@/lib/mail';
import { checkUserExistance, createUser } from '@/lib/query';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        const isUserExist = await checkUserExistance(email, username);

        if (isUserExist) {
            return NextResponse.json(
                { user: null, message: 'User is already exist' },
                { status: 409 },
            );
        }

        const hashedPassword = await hash(password, 10);
        const verificationToken = generateEmailVerificationToken();
        cookies().set('email, username, password', {
            email,
            username,
            password,
        });
        const { password: userPassword, ...user } = await createUser({
            username,
            email,
            password: hashedPassword,
            emailVerifToken: verificationToken,
        });
        cookies().set('user', user);

        await sendVerificationEmail(email, verificationToken);
        return NextResponse.json(
            {
                user,
                message: 'User successfully created',
            },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
