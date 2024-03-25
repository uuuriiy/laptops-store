'use server';

import { redirect } from 'next/navigation';
import { signUpShema } from '@/utils/form';
import { BASE_URL } from '@/utils/index';
import { headers, cookies } from 'next/headers';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import { emailVerificationTokenUpdate } from '@/lib/query';

export const signUpAction = async (_, formData) => {
    const authorization = headers().get('authorization');
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

    cookies().set('data', data);

    try {
        await fetch(`${process.env.PRODUCTION_URL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization,
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
