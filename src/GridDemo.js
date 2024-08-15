import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';

const CustomButtonComponent = (props) => {

    const handleClick = () => {
        if(props.data){
            if(props.data.make){
                window.alert("You have clicked on: " + props.data.make);
            }
        }
    }

    return <button onClick={handleClick}>Push Me!</button>;
};

function GridDemo() {
    // Grid is just like table
    // table has rows and columns
    // Row Data: The data to be displayed.
    // We have useState which is an array of JSON
    // In real case this array of JSON comes from an REST API EndPoint

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 1133850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    // We have an Array of JSON which represent field name
    const [colDefs, setColDefs] = useState([
        { field: "make",flex:2 },
        { field: "model",flex:1 },
        { field: "price",flex:1, valueFormatter: (p) => 'Rs. ' + p.value.toLocaleString() },
        { field: "electric",flex:1, cellRenderer: CustomButtonComponent }
    ]);

    // Two points always keep in mind
    // 1. Is this thing made by me or not
    // 2. If it is made by me then I know and If  not then find it.

    return (
        // wrapping container with theme & size
        <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
}

export default GridDemo;
