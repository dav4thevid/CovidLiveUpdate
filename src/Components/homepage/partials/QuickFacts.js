import React from 'react';
import axios from 'axios';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

class QuickFact extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      timeline: {}
    }
  }

  

  componentDidMount() {
    const url = 'https://corona-api.com/timeline'
    axios.get(url).then(res => {
      const timeline1 = res.data.data[0];
      this.setState({timeline:timeline1});
      console.log(this.state.timeline.active);
    })
  }

  render() {
    return (<div>
      <div class = "row ">
        <div class = "col">
        <div  class="card ">
      <div style ={{backgroundColor:"#445175"}} class="card-body  ">
        <h2 class="card-title">QUICK FACTS</h2>
        <small>{this.state.timeline.updated_at}</small>
        <h3 class="card-header">{this.state.timeline.confirmed}</h3>
        <h5 class="card-text">Total-Confirmed</h5>
        <h3 class="card-header">{this.state.timeline.active}</h3>
        <h5 class="card-text">Total-Active</h5>
        <h3 class = "card-header">{this.state.timeline.recovered}</h3>
        <h5 clas = "card-text">Total Recovered</h5>
        <h3 class = "card-header">{this.state.timeline.deaths}</h3>
        <h5 clas = "card-text">Total Deaths</h5>
        <h3 class = "card-header">{this.state.timeline.new_confirmed}</h3>
        <h5 clas = "card-text">Newly Confirmed</h5>
        <h3 class = "card-header">{this.state.timeline.new_recovered}</h3>
        <h5 clas = "card-text">Newly Recovered</h5>
        <h3 class = "card-header">{this.state.timeline.new_deaths}</h3>
        <h5 clas = "card-text">New Deaths</h5> 
      </div>
    </div>
        </div>
      </div>
   
     </div>
    )
  }


}


export default QuickFact