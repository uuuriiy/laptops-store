'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useFormState } from "react-dom";

import { signUpAction, resendVerificationEmailAction, signInAction } from '@/lib/action';
import { 
    FORM, SIGN_IN, 
    SIGN_UP, RESEND_VERIFICATION_EMAIL
} from '@/utils/form';

const useAuthForms = () => {
    const pathName = usePathname();
    const { fields, title } = FORM[pathName];

    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const verificationSent = Boolean(searchParams.get('verification_sent'));

    const ACTIONS = {
        [SIGN_UP.path]: signUpAction,
        [RESEND_VERIFICATION_EMAIL.path]: resendVerificationEmailAction.bind(null, email),
        [SIGN_IN.path]: signInAction
    };

    const [formState, action] = useFormState(ACTIONS[pathName], {
        errors: {},
    });

    const showAuthButtons = SIGN_IN.path === pathName;
    const showFormLink = pathName === SIGN_IN.path || pathName === SIGN_UP.path;

    const formLinkProps = pathName === SIGN_IN.path ? SIGN_UP : SIGN_IN;

    return {
        fields, title,
        formState, action,
        showAuthButtons, showFormLink,
        formLinkProps, verificationSent
    }
};

export default useAuthForms;