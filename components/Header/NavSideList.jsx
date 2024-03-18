import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { navLinks } from '@/utils/header';

const StyledListItem = styled(ListItem)(({ isactivelink }) => ({
    display: 'block',
    color: isactivelink ? 'white' : 'gray',
    backgroundColor: isactivelink ? 'gray' : 'transparent',
}));

const StyledLink = styled(Link)(({ isactivelink }) => ({
    textDecoration: 'none',
    color: isactivelink ? 'white' : 'gray',
}));

export const NavSideList = ({ toggleDrawer }) => {
    const path = usePathname();
    return (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navLinks.map(({ title, href, icon }) => (
                    <StyledListItem
                        key={title}
                        disablePadding
                        isactivelink={href === path ? 1 : 0}
                    >
                        <StyledLink
                            isactivelink={href === path ? 1 : 0}
                            href={href}
                        >
                            <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </StyledLink>
                    </StyledListItem>
                ))}
            </List>
        </Box>
    );
};
