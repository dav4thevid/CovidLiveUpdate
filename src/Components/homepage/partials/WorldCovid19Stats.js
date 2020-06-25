import React, { Component } from "react";
import axios from "axios";

export class WorldCovid19Stats extends Component {
  state = {
    stats: [],

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
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h4>Bootstrap Snipp for Datatable</h4>
              <div class="table-responsive">
                <table id="mytable" class="table table-bordered table-responsive  table-striped">
                  <thead>
                    {/* <th>
                      <input type="checkbox" id="checkall" />
                    </th> */}
                    <th >Countries</th>
                <th >Confirmed Cases</th>
                <th >Critical Cases</th>
                <th >Recovered</th>
                <th >Death</th>
                <th >Newly Confirmed (Today)</th>
                <th >New Death (Today)</th>
                  </thead>
                  <tbody>
                  {this.state.stats.map((stat) => (
                <tr>
                  <td >{stat.name}</td>
                  <td >
                    {stat.latest_data.confirmed}
                  </td>
                  <td >
                    {stat.latest_data.critical}
                  </td>
                  <td >
                    {stat.latest_data.recovered}
                  </td>
                  <td >
                    {stat.latest_data.deaths}
                  </td>
                  <td>
                    {stat.today.confirmed}
                  </td>
                  <td>
                    {stat.today.deaths}
                  </td>
                </tr>
              ))}
                    
                  </tbody>
                </table>

                <div class="clearfix"></div>
                <ul class="pagination pull-right">
                  <li class="disabled">
                    <a href="#">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                  </li>
                  <li class="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    );
  }
}

export default WorldCovid19Stats;
