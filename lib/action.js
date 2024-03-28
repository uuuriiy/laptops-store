'use server';

import { redirect } from 'next/navigation';
import { signUpShema } from '@/utils/form';
// import { BASE_URL } from '@/utils/index';
// import { headers } from 'next/headers';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import { emailVerificationTokenUpdate } from '@/lib/query';

export const signUpAction = async (_, formData) => {
    const { data, success, error } = signUpShema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    console.log(data, 'data');

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    const user = JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
    });

    try {
        await fetch(`${process.env.PRODUCTION_URL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: user,
        });

        redirect(`/verify-email/send?email=${data.email}&verification_sent=1`);
    } catch (error) {
        console.error(error);
    }

    // redirect(`/verify-email/send?email=${data.email}&verification_sent=1`);
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
