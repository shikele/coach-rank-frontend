import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { RiTeamFill } from "react-icons/ri";
import { CgGenderFemale } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { PiSoccerBall } from "react-icons/pi";

const sideMenu = [
    { title: 'Home', path: '/home', Icon: HomeIcon },
    { title: 'Club', path: '/club', Icon: RiTeamFill },
    { title: 'Gender', path: '/gender', Icon: CgGenderFemale },
    { title: 'Year', path: '/year', Icon: SlCalender },
    { title: 'Team', path: '/team', Icon: PiSoccerBall }
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div> Title </div>
            <List>
                {sideMenu.map((menuItem, index) => {
                    const { title, path, Icon } = menuItem
                    return (

                        <ListItem key={title} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
