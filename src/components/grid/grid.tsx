import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, {useEffect, useState} from 'react';
import myData from '../../components/grid/coach.json';
import 'ag-grid-enterprise';
import {AgGridReact} from "ag-grid-react";
import {GridApi} from "ag-grid-enterprise";

// Row Data Interface
interface IRow {
    coach_name: string;
    team_id: string;
    team_name: string;
    club_name: string;
}

interface Props {
    filterType: string
    filterKeyword: string
}

// Create new GridExample component
const GridExample = (props: Props) => {
    // Row Data: The data to be displayed.
    const {filterType, filterKeyword} = props
    const [rowData, setRowData] = useState<IRow[]>(
        myData
    );
    const [gridApi, setGridApi] = useState<GridApi | null>(null);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { field: 'coach_name', filter: 'agTextColumnFilter'},
        { field: 'team_id', filter: 'agTextColumnFilter' },
        { field: 'team_name', filter: 'agTextColumnFilter' },
        { field: 'club_name', filter: 'agTextColumnFilter' },
    ]);

    const onGridReady = (params: { api: GridApi }) => {
        setGridApi(params.api);
    };

    useEffect(() => {
        console.log("here")
        if (gridApi && filterType && filterKeyword) {
            gridApi.setFilterModel({
                [filterType]: {
                    filterType: 'text',
                    type: 'contains',
                    filter: filterKeyword,
                },
            });
            gridApi.onFilterChanged();
            console.log("apply changes", filterType, filterKeyword)

            let filteredData: IRow[] = [];
            gridApi.forEachNodeAfterFilterAndSort((node) => {
                if (node.data) {
                    filteredData.push(node.data);
                }
            });

            setRowData(filteredData);
        }
    }, [gridApi, filterType, filterKeyword]);

    // Container: Defines the grid's theme & dimensions.
    return (
        <div
            className={
                "ag-theme-quartz"
            }
            style={{ width: '1500px', height: '500px', marginLeft: '250px' }}
        >
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={colDefs}/>
        </div>
    );
};

export default GridExample
