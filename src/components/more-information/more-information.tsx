import React from 'react';

import './more-information.scss';
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";

function MoreInformation() {
    return (
        <div className={"MoreInfoBigBox"}>
            <div className={"MoreInfoLeftBox"}>
                <h2>More information</h2>
                <span>Want to learn more about the team, club, or a specific coach? Contact us via email:
                    info@coach-rank.com, or you can fill the form on the right,
                    and we will have someone contact you soon!</span>
            </div>
            <div className={"MoreInfoRightBox"}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="Your Email"
                            multiline
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                        />
                    </div>
                </Box>
                <Button variant="contained" className={"inter-bold"}>Submit</Button>
            </div>
        </div>
    );
}

export default MoreInformation;
