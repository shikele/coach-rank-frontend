import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import myData from '../../components/grid/coach.json';
import 'ag-grid-enterprise';

// Row Data Interface
interface IRow {
    coach_name: string;
    team_id: string;
    team_name: string;
    club_name: string;
}

// Create new GridExample component
const GridExample = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<IRow[]>(
        myData
    );

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { field: 'coach_name', filter: 'agSetColumnFilter'},
        { field: 'team_id', filter: 'agSetColumnFilter' },
        { field: 'team_name', filter: 'agSetColumnFilter' },
        { field: 'club_name', filter: 'agSetColumnFilter' },
    ]);

    // Container: Defines the grid's theme & dimensions.
    return (
        <div
            className={
                "ag-theme-quartz"
            }
            style={{ width: '1500px', height: '500px', marginLeft: '250px' }}
        >
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
    );
};

export default GridExample
