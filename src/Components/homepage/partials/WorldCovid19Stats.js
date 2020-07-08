import React, { Component } from "react";
import axios from "axios";
import { css } from "@emotion/core";
// import BounceLoader from "react-spinners/BounceLoader";
import MoonLoader from "react-spinners/MoonLoader"

const override = css`
  display: block;
  margin: 10% auto;
  border-color: red;
`;

export class WorldCovid19Stats extends Component {
  state = {
    stats: [],
    loading: true,

  };
  // Territory	Total Cases	New Cases	Total Deaths	New Deaths	Total Recovered
  componentDidMount() {
    const url = "https://corona-api.com/countries";
    axios.get(url).then((response) => {
      this.setState({ stats: response.data.data, loading: false });
      console.log(this.state.stats);
    }).catch(error => {
      if (error.response) {
        console.log(error.response)
      }
    })
  }

  render() {
    if (this.state.loading ) {
      return <div className="sweet-loading">
        <MoonLoader
          css={override}
          size={120}
          color={"orange"}
          loading={this.state.loading}
        />
      </div>
    }
    return (
      // cellspacing="0" cellpadding="1" border="1" width="300"
            <div class="col-md-12 card" style ={{backgroundColor:"#445175"}} >
              <h3 style = {{color: "#DFDFEF"}}>
                World Statistics of Covid-19
              </h3>
              <div class="table-responsive">
                <table style = {{width:"1000px", height:"400px", overflow:"auto;"}}
                id="mytable" class="border-0 table table-striped  table-responsive ">
                  <thead>
                    {/* <th>
                      <input type="checkbox" id="checkall" />
                    </th> */}
                    <th>Countries</th>
                <th >Confirmed</th>
                <th >Active</th>
                <th >Recovered</th>
                <th >Death</th>
                <th >Newly Confirmed</th>
                <th >New Deaths</th>
                  </thead>
                  <tbody>
                  {this.state.stats.map((stat) => (
                <tr>
                  <td style = {{color: "#DFDFEF"}}>{stat.name}</td>
                  <td style = {{color:'#43ca54'}} >
                    {stat.latest_data.confirmed}
                  </td>
                  <td style = {{color:'#FF9D00'}}>
                    {stat.latest_data.critical}
                  </td>
                  <td style = {{color: "#5468b3"}}>
                    {stat.latest_data.recovered}
                  </td>
                  <td style = {{color: "#F65164"}}>
                    {stat.latest_data.deaths}
                  </td>
                  <td style = {{color: "#43ca54"}}>
                    {stat.today.confirmed}
                  </td>
                  <td style = {{color: "#F65164"}}>
                    {stat.today.deaths}
                  </td>
                </tr>
              ))}
                    
                  </tbody>
                </table>

                <div class="clearfix"></div>
              
              </div>
            </div>
         

    );
  }
}

export default WorldCovid19Stats;
