import Link from 'next/link';

import { styled } from '@mui/material/styles';

const StyledLinkConteiner = styled('p')({
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'gray',

    a: {
        textDecoration: 'none',
        marginLeft: '5px',
        color: 'blue',
    },

    '@media (max-width: 767px)': {
        fontSize: '14px',
    },
});

export const FormLink = ({ formLinkProps: { path, title, subTitle } }) => (
    <StyledLinkConteiner>
        {subTitle}
        <Link href={path}>{title}</Link>
    </StyledLinkConteiner>
);
