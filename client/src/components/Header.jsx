
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledApp = styled(AppBar)`
        background: #fff;
        height: 70px;
`;
    
const MenuIcon = styled(Menu)`
        color: #000;
`;
    
const Image = styled('img')({
        height: 60,
        margin: 'auto',
        paddingRight: 100
})

const Header = () => {
    const url = 'https://cdn.dribbble.com/users/1730190/screenshots/15750176/media/f5fda9616439f11ae30a721dc5fcb9b2.png?compress=1&resize=1300x300';

    return (
        <StyledApp>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledApp>
    )
}

export default Header;