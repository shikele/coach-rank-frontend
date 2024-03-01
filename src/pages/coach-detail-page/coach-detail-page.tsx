import React from 'react';


import { AgGridReact } from 'ag-grid-react';
import { createTheme, ThemeProvider} from "@mui/material";
import {Grid, Paper, Typography} from "@mui/material/";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {ColDef} from "ag-grid-community";
// Import other necessary components and styles

const theme = createTheme({
  // Customize the theme here
});

const CoachDetails: React.FC = () => {
  // Define state and functions
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Coach Details
      </Typography>

      <Typography variant="h5" component="div" gutterBottom>
        Name: Anne
      </Typography>

      <Grid container
            style={{ width: '70%', marginLeft: '15%' }}>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" color="primary">
            50%
          </Typography>
          <Typography variant="subtitle1">Points Per Game</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" color="primary">
            5th
          </Typography>
          <Typography variant="subtitle1">Win Rate Ranking</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" color="primary">
            49
          </Typography>
          <Typography variant="subtitle1">Number of Matches</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Typography variant="h1" component="div" color="secondary">
            A
          </Typography>
          <Typography variant="subtitle1">Coach Level</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" color="primary">
            15%
          </Typography>
          <Typography variant="subtitle1">Improvement Under Coaching</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <EmojiEventsIcon color="action" style={{ fontSize: 48 }} />
          <Typography variant="subtitle1">Team Played Up This Season</Typography>
        </Grid>
      </Grid>
    </div>

  );
};

const WinRateChart: React.FC = () => {
  // Define state and functions for chart
  return (
    <Paper>
      {/* Render the win rate chart */}
    </Paper>
  );
};

const CoachTeamInformation: React.FC = () => {

  const columnDefs: ColDef[] = [
    { headerName: 'Team Name', field: 'teamName', sortable: true, filter: true },
    { headerName: 'Club Name', field: 'clubName', sortable: true, filter: true },
    { headerName: 'Win Rate', field: 'winRate', sortable: true, filter: true },
    { headerName: 'Start of Coaching Tenure', field: 'startCoachingTenure', sortable: true, filter: true }
  ];

// Create an array of data
  const rowData = [
    { teamName: 'Team Name 1', clubName: 'Club Name 1', winRate: '50%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 2', clubName: 'Club Name 2', winRate: '50%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 3', clubName: 'Club Name 2', winRate: '40%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 4', clubName: 'Club Name 2', winRate: '30%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 5', clubName: 'Club Name 2', winRate: '20%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 6', clubName: 'Club Name 2', winRate: '10%', startCoachingTenure: 'September 20th, 2022' },
    { teamName: 'Team Name 7', clubName: 'Club Name 2', winRate: '50%', startCoachingTenure: 'September 20th, 2022' },

    { teamName: 'Team Name 8', clubName: 'Club Name 8', winRate: '50%', startCoachingTenure: 'September 20th, 2022' }
  ];
  // Define AG Grid column definitions and row data
  return (
    <div className="ag-theme-quartz" style={{ height: '500px', width: '70%', marginLeft: '15%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      ></AgGridReact>
    </div>
  );
};

const CoachDetailPage: React.FC = () => {
  return (
    <div>
      <CoachDetails />
      <WinRateChart />
      <Typography variant="h5">Coach's Team Information</Typography>
      <CoachTeamInformation />
    </div>
  );
};

export default CoachDetailPage;
