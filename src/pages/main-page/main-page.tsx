import * as React from 'react';

import logo from "../../resources/logo.png"
import './main-page.scss';
import SearchBar from "../../components/search-bar/search-bar";
import {Button} from "@mui/material";
import HotComments from "../../components/hot-comments/hot-comments";
import MoreInformation from "../../components/more-information/more-information";



export default function MainPage() {


    return (
        <div>
            <div className={"TopBox"}>
                <div className={"HeaderRow"}>
                    <div className={"HeaderLeftDiv"}>
                        <div className="MenuHeaderIconDiv">
                            <img src={logo} alt="header logo"/>
                        </div>
                    </div>

                    <Button variant="contained" className={"ContactUsButton inter-bold"}>Contact Us</Button>

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
