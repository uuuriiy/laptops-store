'use server';

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { signUpShema } from '@/utils/form';
import { BASE_URL } from '@/utils/index';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import { emailVerificationTokenUpdate } from '@/lib/query';

export const signUpAction = async (_, formData) => {
    const forwardedFor = headers().get('x-forwarded-host');
    console.log(forwardedFor, 'forwardedFor');
    const { data, success, error } = signUpShema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    console.log(data, 'data');
    console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
    console.log(BASE_URL, 'BASE_URL');

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-forwarded-host': forwardedFor === 'http://localhost:3000/' ? process.env.NEXTAUTH_URL : process.env.NEXTAUTH_URL
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
        });
    } catch (error) {
        console.error(error);
    }

    redirect(`/verify-email/send?email=${data.email}&verification_sent=1`);
};

export const resendVerificationEmailAction = async (email) => {
    const emailVerificationToken = generateEmailVerificationToken();

    try {
        await emailVerificationTokenUpdate(email, emailVerificationToken);

        await sendVerificationEmail(email, emailVerificationToken);
    } catch (error) {
        return {
            errors: 'Something went wrong.',
        };
    }
};
