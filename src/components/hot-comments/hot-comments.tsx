import React from 'react';
import { Grid, Paper, Typography, Avatar, Button } from '@mui/material/';

import './hot-comments.scss';
import {CardContent, CardHeader} from "@mui/material";

function HotComments() {
    const comments = [
            {
                "id": 0,
                "userName": "Christopher Cruz",
                "date": "July 28, 2023",
                "text": "Pass defense into. Live actually sit agent shake have determine cup. Safe enjoy law director never born.Pass defense into. Live actually sit agent shake have determine cup. Safe enjoy law director never born",
                "userImage": "https://www.lorempixel.com/100/100"
            },
            {
                "id": 1,
                "userName": "Catherine Lopez",
                "date": "June 29, 2023",
                "text": "Start mention theory. Or color control plant want these computer.\nSoon wife movement machine power bad history. Mrs level end upon this. Thousand similar low fund.Thousand similar low fund.Thousand similar low fund.Thousand similar low fund.Thousand similar low fund.Thousand similar low fund.",
                "userImage": "https://placekitten.com/100/100"
            },
            {
                "id": 2,
                "userName": "Christopher Allen",
                "date": "September 11, 2023",
                "text": "Reach ask sport what. Name west movement discussion.\nBetween challenge them section tend join others. Rich well child heart law place hard good.",
                "userImage": "https://placekitten.com/100/100"
            },
            {
                "id": 3,
                "userName": "Michele Tanner",
                "date": "June 30, 2023",
                "text": "Sit analysis minute each. Step seven general industry perhaps support. Indicate court movie risk lay cut book. Water cover task population.",
                "userImage": "https://dummyimage.com/100x100"
            },
            {
                "id": 4,
                "userName": "Matthew Cruz",
                "date": "January 04, 2023",
                "text": "Finally realize issue career design writer. Interest cold course bad friend begin drop address. Like east mean red list TV.\nDevelop month serve source minute. Help way despite start traditional less.",
                "userImage": "https://placeimg.com/100/100/any"
            },
            {
                "id": 5,
                "userName": "Christian Greene DDS",
                "date": "January 16, 2023",
                "text": "Environment clearly produce inside. Material art service thousand.\nBlood our half far store. Charge media truth wife open. During decide whatever position list understand answer.",
                "userImage": "https://placeimg.com/100/100/any"
            },
            {
                "id": 6,
                "userName": "Brandy Williams",
                "date": "January 27, 2023",
                "text": "Try probably front artist institution within.\nNight him year draw. Our nation role amount figure born. Case study conference rich.\nReason expert miss pay word always look.",
                "userImage": "https://placekitten.com/100/100"
            },
            {
                "id": 7,
                "userName": "Gregory Jones",
                "date": "March 02, 2023",
                "text": "Population real turn issue. And method staff adult rate. Notice message one least challenge different happen.\nPerformance entire every develop. Church together ready represent throw happen customer.",
                "userImage": "https://placekitten.com/100/100"
            }
        ]
    ;

    return (
        <Grid container spacing={4}>
            {comments.map((comment) => (
                <Grid item sm={12} md={6} lg={4} xl={3} key={comment.id}>
                    <Paper className={"PaperBox"} elevation={3}>
                        <CardHeader
                            avatar={
                                <Avatar className={"AvatarBox"} alt={comment.userName} src={comment.userImage} />
                            }
                            title={comment.userName}
                            subheader={comment.date}

                        />
                        <CardContent>
                            <Typography className={"CommentBody"} variant="body2">{comment.text}</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="outlined">More Comments</Button>
            </Grid>
        </Grid>

    );
}

export default HotComments;
