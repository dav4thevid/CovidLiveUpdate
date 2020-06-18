import React, { Component } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  

export class WorldCovid19Stats extends Component {  
    state = {  
        stats: [],  
        columns: [{  
          dataField: 'Id',  
          text: 'Id'
                  },  
                  {  
          dataField: 'Name',  
          text: 'Name',  
          sort:true  
                  }, 
                  {  
          dataField: 'Age',  
          text: 'Age',  
          sort: true  
                  },  
                ]  
              }  
         componentDidMount() {  
           const url = 'https://corona-api.com/countries'  
            axios.get(url)
            .then(response => {   
              this.setState({ stats: response.data.data});          
              console.log(this.state.stats)
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
                  <div  style={{ marginTop: 20 }}>  
                    <BootstrapTable   
                      striped  
                      hover  
                      keyField='id'   
                      data={ this.state.stats}   
                      columns={ this.state.columns } >
                    </BootstrapTable>  
                  </div>  
              </div>  

                )  

        }  

}  

  

export default WorldCovid19Stats