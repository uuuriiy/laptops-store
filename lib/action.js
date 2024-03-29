'use server';

import { redirect } from 'next/navigation';
import axios from 'axios';
import { signUpShema } from '@/utils/form';
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

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    const user = JSON.stringify(data);
    // console.log(user, 'user');

    try {
        await axios.post(`${process.env.PRODUCTION_URL}/api/user`, data);
        // {
        //     // method: 'POST',
        //     // headers: {
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //         // 'Content-Type': 'application/json',
        //         // 'Access-Control-Allow-Origin': '*',
        //         // 'Access-Control-Allow-Headers':
        //         //     'authorization, x-client-info, apikey, content-type',
        //         // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        //     // },
        //     body: user,
        // }
        // );
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
