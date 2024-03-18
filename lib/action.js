import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { signUpShema, signInShema } from '@/utils/form';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import {
    emailVerificationTokenUpdate,
    isUsersEmailVerified,
} from '@/lib/query';

export const signInAction = async (_, formData) => {
    const { success, data, error } = signInShema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    try {
        await isUsersEmailVerified(data.email);

        await signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: '/',
        });
    } catch (error) {
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        errors: 'Invalid credentials.',
                    };
                default:
                    return {
                        errors: 'Something went wrong.',
                    };
            }
        }

        throw error;
    }
};

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

    try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
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
