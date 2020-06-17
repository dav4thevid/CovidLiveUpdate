import React from 'react';
import axios from 'axios';

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
      // console.log(this.state.timeline)
      console.log(this.state.timeline.active);
    })
  }

  render() {
    return (<div>
     <card>
      <h3>{this.state.timeline.active}</h3>
      <h3>{this.state.timeline.deaths}</h3>
     </card>
    
     </div>
    )
  }


}


export default QuickFact