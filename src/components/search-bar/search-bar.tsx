import * as React from 'react';
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';

import coachFullData from '../../components/grid/coach.json';
import {
    Autocomplete,
    Button,
    createFilterOptions,
    TextField,

} from "@mui/material";

import './search-bar.scss';

const filterOptions = createFilterOptions({
    ignoreCase: true,
    matchFrom: "any",
    limit: 20,
});

export default function SearchBar() {

    const uniqueCoachNames = new Set()
    const uniqueTeamNames = new Set()

    coachFullData.forEach((item) => {
        uniqueCoachNames.add(item.coach_name);
        uniqueTeamNames.add(item.team_name);
    });
    const mergedUniqueNames = Array.from(new Set([...uniqueCoachNames, ...uniqueTeamNames]));
    return (
        <Autocomplete
            className={"SearchTextBox"}
            disablePortal
            filterOptions={filterOptions}
            id="searchAutoComplete"
            options={mergedUniqueNames}
            sx={{
                width: '80%',
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '30px',
                },
                '& .MuiOutlinedInput-input': {
                    paddingLeft: '20px !important', // Adjusts the padding to move placeholder text 2 spaces to the right
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: '30px'
                    },
                    '&:hover fieldset': {
                        borderRadius: '30px'
                    },
                    '&.Mui-focused fieldset': {
                        borderRadius: '30px'
                    },
                }
            }}
            renderInput={(params) =>
                <div>
                    {/*<div className={"SearchIconWrapper"}>*/}
                    {/*    <SearchIcon/>*/}
                    {/*</div>*/}

                    <TextField {...params}
                               placeholder="Search for the coach name, or team name to find a suitable coach"
                                className={"SearchTextField"}/>
                    <Button variant="contained" className={"inter-bold SearchBarButton"}>Search</Button>
                </div>
                }
            componentsProps={{
                clearIndicator: {style: {display: 'none'}},
                popupIndicator: {style: {display: 'none'}}
            }}

        />

    );
}
