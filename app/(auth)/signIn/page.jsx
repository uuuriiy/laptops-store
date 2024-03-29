import { Suspense } from 'react';
import { Form } from '@/components/Form/Form';
export const dynamic = 'force-dynamic';

export default function SignInPage() {
    return (
        <Suspense>
            <Form />
        </Suspense>
    );
}
