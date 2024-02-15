// @flow
import * as React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import './club-list.scss';

const teamName = ["A", "B", "C", "D", "E"]

export const ClubList = () => {
  return (
    <div>
      <List>
        {teamName.map((teamName, index) => {
          return (

            <ListItem key={teamName} disablePadding>
              <ListItemButton className={"TeamButton"}>
                <ListItemText primary={teamName} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  );
};
