'use server';

import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';
import { signUpShema } from '@/utils/form';
import { BASE_URL } from '@/utils/index';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import { emailVerificationTokenUpdate } from '@/lib/query';

export const signUpAction = async (_, formData) => {
    // const forwardedFor = headers().get('x-forwarded-host');
    // console.log(forwardedFor, 'forwardedFor');
    const { data, success, error } = signUpShema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    console.log(process.env.PRODUCTION_URL, 'PRODUCTION_URL');

    const URL =
        process.env.NODE_ENV === 'production'
            ? process.env.PRODUCTION_URL
            : process.env.NEXTAUTH_URL;

    try {
        await fetch(`${BASE_URL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
