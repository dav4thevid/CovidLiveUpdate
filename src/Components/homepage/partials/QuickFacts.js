import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';

// const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

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
        <div  class="card border-0 ">
          
      <div style ={{backgroundColor:"#445175"}} class="card-body  ">
        <h2 class="card-text">Quick Facts</h2>
        <h6 class = "card-text">Updated at: &nbsp;
          <Moment format="DD-MM-YYYY HH:mm">{this.state.timeline.updated_at}</Moment>
        </h6>

        <h1 style = {{color:'#43ca54'}} class="header">{this.state.timeline.confirmed}</h1>
        <h4 class="card-text">Total Confirmed</h4>
        <h1 style = {{color:'#FF9D00'}} class="header">{this.state.timeline.active}</h1>
        <h4 class="card-text">Total Active</h4>
        <h1 style = {{color: "#5468b3"}}class = "header">{this.state.timeline.recovered}</h1>
        <h4 class = "card-text">Total Recovered</h4>
        <h1 style = {{color: "#F65164"}} class = "header">{this.state.timeline.deaths}</h1>
        <h4 class = "card-text">Total Deaths</h4>
        <h1 style = {{color:'#43ca54'}} class = "header">{this.state.timeline.new_confirmed}</h1>
        <h4 class = "card-text">Newly Confirmed</h4>
        <h1 style = {{color: "#5468b3"}} class = "header">{this.state.timeline.new_recovered}</h1>
        <h4 class = "card-text">Newly Recovered</h4>
        <h1 style = {{color: "#F65164"}} class = "header">{this.state.timeline.new_deaths}</h1>
        <h4 class = "card-text">New Deaths</h4> 

                      
      </div>
    </div>
        </div>
      </div>
   
     </div>
    )
  }


}


export default QuickFact