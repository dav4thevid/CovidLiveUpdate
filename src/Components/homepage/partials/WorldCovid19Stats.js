import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";

export class WorldCovid19Stats extends Component {
  state = {
    stats: [],
    columns: [
      {
        dataField: "Id",
        text: "Id",
      },
      {
        dataField: "teritory",
        text: "Teritory",
        sort: true,
      },
      {
        dataField: "total_cases",
        text: "Total Cases",
        sort: true,
      },
      {
        dataField: "new_cases",
        text: "New Cases",
        sort: true,
      },
      {
        dataField: "total_deaths",
        text: "Total Deaths",
        sort: true,
      },
      {
        dataField: "new_deaths",
        text: "New Deaths",
        sort: true,
      },
      {
        dataField: "total_recovered",
        text: "Total Recovered",
        sort: true,
      },
    ],
  };
  // Territory	Total Cases	New Cases	Total Deaths	New Deaths	Total Recovered
  componentDidMount() {
    const url = "https://corona-api.com/countries";
    axios.get(url).then((response) => {
      this.setState({ stats: response.data.data });
      console.log(this.state.stats);
    });
  }

  render() {
    return (
      <div className="container">
        <div class="row" className="hdr">
          <div class="col-sm-12 btn btn-info">
            React Bootstrap Table with Searching and Custom Pagination
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div>
            <table style={{ width: "100%" }}>
              <tr style={{ fontSize: "15px" }}>
                <th style={{ border: " solid black 2px" }}>Countries</th>
                <th style={{ border: " solid black 2px" }}>Confirmed Cases</th>
                <th style={{ border: " solid black 2px" }}>Critical Cases</th>
                <th style={{ border: " solid black 2px" }}>Recovered</th>
                <th style={{ border: " solid black 2px" }}>Death</th>
                <th style={{ border: " solid black 2px" }}>Newly Confirmed (Today)</th>
                <th style={{ border: " solid black 2px" }}>New Death (Today)</th>
              </tr>
              {this.state.stats.map((stat) => (
                <tr>
                  <td style={{ border: " solid black 2px" }}>{stat.name}</td>
                  <td style={{ border: " solid black 2px" }}>
                    {stat.latest_data.deaths}
                  </td>
                  <td style={{ border: " solid black 2px" }}>
                    {stat.latest_data.confirmed}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          {/* <BootstrapTable   
                      striped  
                      hover  
                      keyField='id'  
                      data={ this.state.stats} 
                      
                      columns={ this.state.columns } >
                    </BootstrapTable>   */}
        </div>
      </div>
    );
  }
}

export default WorldCovid19Stats;
