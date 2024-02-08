// @flow
import * as React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const teamName = ["A", "B", "C", "D", "E"]

export const ClubList = () => {
  return (
    <div>
      <List>
        {teamName.map((teamName, index) => {
          return (

            <ListItem key={teamName} disablePadding>
              <ListItemButton>
                <ListItemText primary={teamName} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  );
};
