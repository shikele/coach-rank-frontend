import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ClubList} from "../club-list/club-list";
import { IoMenu } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import logo from "../../resources/logo.png"
import logoWhite from "../../resources/logo_white.png"
import { FiHome } from "react-icons/fi";
import { TbShirtSport } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";
import { IoFootballOutline } from "react-icons/io5";


import './main-page.scss';
import SearchBar from "../search-bar/search-bar";
import {Button} from "@mui/material";
import HotComments from "../hot-comments/hot-comments";
import MoreInformation from "../more-information/more-information";

const sideMenu = [
    { title: 'Home', path: '/home', Icon: FiHome },
    { title: 'Club', path: '/club', Icon: TbShirtSport },
    { title: 'Gender', path: '/gender', Icon: GoPeople },
    { title: 'Year', path: '/year', Icon: FiCalendar },
    { title: 'Team', path: '/team', Icon: IoFootballOutline }
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function MainPage() {
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
            <div className={"TopBox"}>
                <div className={"HeaderRow"}>
                    {(['left'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <div>
                                <div onClick={toggleDrawer(anchor, true)} className="SideMenuOpenDiv">
                                    <IoMenu className="SideMenuOpenButton"/>
                                </div>
                                <div className="MenuHeaderIconDiv">
                                    <img src={logo} alt="header logo"/>
                                </div>
                            </div>

                            <Button variant="contained" className={"ContactUsButton inter-bold"}>Contact Us</Button>


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
                <div>
                    <h2 className={"inter-bold"}>XF BOYS ECNL 1 TEAMS WERE 10-1-1 IN PHOENIX ECNL SHOWCASE</h2>
                    <div className={"SearchDiv"}>
                        <SearchBar></SearchBar>
                        <Button variant="contained" className={"inter-bold"}>Search</Button>
                    </div>

                </div>
            </div>

            <div className={"BottomBox"}>
                <div className={"HotCommentBox"}>
                    <HotComments></HotComments>
                </div>
                <div className={"MoreInformationBox"}>
                    <MoreInformation/>
                </div>


            </div>
        </div>

    );
}
