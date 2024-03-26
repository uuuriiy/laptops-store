import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { cookies } from 'next/headers';
import {
    sendVerificationEmail,
    generateEmailVerificationToken,
} from '@/lib/mail';
import { checkUserExistance, createUser } from '@/lib/query';

export async function POST(req) {
    cookies().set('url', req.url);
    console.log(req.url, 'req');
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
