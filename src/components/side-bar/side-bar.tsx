import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
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
import {ClubList} from "../club-list/club-list";
import { IoMenu } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import logo from "../../resources/logo.png"
import logo2 from "../../resources/logo2.png"

import './side-bar.scss';

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
            () => {
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            className={"Box"}
            role="presentation"
        >
            <div>
                <img src={logo2} alt="header image" className="SideMenuHeaderIcon" />
                <span className={"SideMenuReturnIconSpan"} onClick={toggleDrawer("left", false)}>
                    <MdArrowBackIosNew className={"SideMenuReturnIcon"}/>
                </span>

            </div>
            <List className="SideMenuList">
                {sideMenu.map((menuItem, index) => {
                    const { title, path, Icon } = menuItem
                    return (

                        <ListItem key={title} disablePadding className="ListItem">
                            <ListItemButton className="ListItemButton">
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                            {index === 1 &&
                                <ClubList/>
                            }
                        </ListItem>

                    )
                })}
            </List>

        </Box>
    );

    return (
        <div className={"HeaderRow"}>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)} className="SideMenuOpenDiv">
                        <IoMenu className="SideMenuOpenButton"/>
                    </div>
                    <div className="MenuHeaderIconDiv">
                        <img src={logo} alt="header logo"/>
                    </div>
                    <div className={"ContactUsBox"}>
                        <span>Contact Us</span>
                    </div>


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
