import React from 'react';
import GridExample from "../../components/grid/grid";
import Box from "@mui/material/Box";
import logoWhite from "../../resources/logo_white.png";
import {MdArrowBackIosNew} from "react-icons/md";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {ClubList} from "../../components/club-list/club-list";
import Drawer from "@mui/material/Drawer";
import {FiCalendar, FiHome} from "react-icons/fi";
import {TbShirtSport} from "react-icons/tb";
import {GoPeople} from "react-icons/go";
import {IoFootballOutline, IoMenu} from "react-icons/io5";

import './grid-page.scss';

const sideMenu = [
    { title: 'Home', path: '/home', Icon: FiHome },
    { title: 'Club', path: '/club', Icon: TbShirtSport },
    { title: 'Gender', path: '/gender', Icon: GoPeople },
    { title: 'Year', path: '/year', Icon: FiCalendar },
    { title: 'Team', path: '/team', Icon: IoFootballOutline }
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function GridPage() {

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
                <img src={logoWhite} alt="header image" className="SideMenuHeaderIcon" />
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
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)} className="SideMenuOpenDiv">
                        <IoMenu className="SideMenuOpenButton"/>
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
            <GridExample/>
        </div>
    );
}

export default GridPage;
