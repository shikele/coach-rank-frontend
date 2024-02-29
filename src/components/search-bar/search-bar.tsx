import * as React from 'react';
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';

import coachFullData from '../../components/grid/coach.json';
import {
    Autocomplete,
    Button,
    createFilterOptions,
    TextField, ToggleButton, ToggleButtonGroup,

} from "@mui/material";

import './search-bar.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const filterOptions = createFilterOptions({
    ignoreCase: true,
    matchFrom: "any",
    limit: 20,
});

export default function SearchBar() {

    const uniqueCoachNames: Set<string> = new Set()
    const uniqueTeamNames: Set<string> = new Set()
    const uniqueClubNames: Set<string> = new Set()

    const ageGroupList: string[] = ["U10", "U11", "U12", "U13", "U14", "U15"]


    const [searchType, setSearchType] = useState('');
    const [names, setNames] = useState<string[]>([]);
    const [searchKeyWord, setSearchKeyWord] = useState<string>(''); // State to store the search query



    const navigate = useNavigate();
    const handleSearch = () => {
        // Navigate to /grid with the search query as a state or query parameter
        console.log(searchKeyWord, searchType)
        navigate('/grid', { state: { keyword: searchKeyWord, optionSelected: searchType } });
    };

    coachFullData.forEach((item) => {
        uniqueCoachNames.add(item.coach_name);
        uniqueTeamNames.add(item.team_name);
        uniqueClubNames.add(item.club_name)
    });
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        selection: string,
    ) => {
        if (selection !== null) {
            setSearchType(selection);
            if (selection === "coach_name") {
                setNames(Array.from(uniqueCoachNames))
            } else if (selection === "team_name") {
                setNames(Array.from(uniqueTeamNames))
            } else if (selection === "club_name") {
                setNames(Array.from(uniqueClubNames))
            } else {
                setNames(ageGroupList)
            }

        }
        console.log(selection)
    };

    return (
        <Autocomplete
            className={"SearchTextBox"}
            disablePortal
            filterOptions={filterOptions}
            id="searchAutoComplete"
            options={names}
            sx={{
                width: '70%',
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
            onChange={(event, newValue) => setSearchKeyWord(newValue as string || '')}
            renderInput={(params) =>
                <div>
                    {/*<div className={"SearchIconWrapper"}>*/}
                    {/*    <SearchIcon/>*/}
                    {/*</div>*/}

                    <TextField {...params}
                               placeholder="Search for the coach name, or team name, or age group to find a suitable coach"
                                className={"SearchTextField"}/>
                    <div className={"ButtonsDiv"}>
                        <ToggleButtonGroup
                            color="primary"
                            value={searchType}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            sx={{
                                '.MuiToggleButtonGroup-grouped': {
                                    margin: '0px',
                                    border: '#252525 solid',
                                    '&.Mui-selected': {
                                        backgroundColor: 'lightblue',
                                        color: 'black',
                                    },
                                    '&.Mui-selected:hover': {
                                        color: 'white',
                                    }
                                },
                            }}
                        >
                            <ToggleButton value="coach_name">Coach name</ToggleButton>
                            <ToggleButton value="team_name">Team name</ToggleButton>
                            <ToggleButton value="club_name">Club name</ToggleButton>
                            <ToggleButton value="age">Age Group</ToggleButton>
                        </ToggleButtonGroup>
                        <Button variant="contained" className={"inter-bold SearchBarButton"} onClick={handleSearch}>Search</Button>
                    </div>

                </div>
                }
            componentsProps={{
                clearIndicator: {style: {display: 'none'}},
                popupIndicator: {style: {display: 'none'}}
            }}

        />

    );
}
