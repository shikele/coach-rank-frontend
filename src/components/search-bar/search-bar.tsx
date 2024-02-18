import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    borderRadius: 30,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    height: '40px',
    width: '60%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        // Add this block to style the placeholder
        '&::placeholder': {
            fontSize: '0.8rem'// Adjust the font size as needed
        },
    },
}));

export default function SearchBar() {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className={"inter-regular"}
                placeholder="Search for the coach name, or team name, or type your children's age, such as Girl 12, to find a suitable coach"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>

    );
}
