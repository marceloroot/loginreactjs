import React,{useState} from "react";

import { makeData, Logo, Tips } from "../../Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

function Tabela() {
  

      const [state, setState] = useState({data:makeData});
    const { data } = state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
 
}

export default Tabela;
