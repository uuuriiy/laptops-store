import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { cookies } from 'next/headers';
import {
    sendVerificationEmail,
    generateEmailVerificationToken,
} from '@/lib/mail';
import { checkUserExistance, createUser } from '@/lib/query';

export async function POST(req) {
    try {
        const body = await JSON.parse(req);
        // req.json();
        console.log(body, 'body');
        const { email, username, password } = body;
        console.log(email, username, password, 'email, username, password');

        const isUserExist = await checkUserExistance(email, username);
        console.log(isUserExist, 'isUserExist');

        if (isUserExist) {
            return NextResponse.json(
                { user: null, message: 'User is already exist' },
                { status: 409 },
            );
        }

        const hashedPassword = await hash(password, 10);
        const verificationToken = generateEmailVerificationToken();
        const { password: userPassword, ...user } = await createUser({
            username,
            email,
            password: hashedPassword,
            emailVerifToken: verificationToken,
        });

        await sendVerificationEmail(email, verificationToken);
        return NextResponse.json(
            {
                user,
                message: 'User successfully created',
            },
            { status: 201 },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
