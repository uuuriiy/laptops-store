'use client';

import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';

import { PATH } from '@/utils/index';

const StyledSection = styled('section')(({ isHomePage }) => ({
    background: 'black',
    backgroundImage: !isHomePage ? 'linear-gradient(#02294F, #000)' : 'inherit',
    backgroundSize: !isHomePage ? '100% 45%' : 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: !isHomePage ? 'top' : 'inherit',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
}));

const StyledSectionContent = styled('div')({
    margin: '0 auto',
    maxWidth: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 1079px)': {
        maxWidth: '50%',
    },

    '@media (max-width: 767px)': {
        maxWidth: '70%',
    },
});

export const Layout = ({ children }) => {
    const path = usePathname();

    return (
        <StyledSection isHomePage={path == PATH.home}>
            <StyledSectionContent>{children}</StyledSectionContent>
        </StyledSection>
    );
};
