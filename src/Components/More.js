import React from 'react';
import { Tabs, Tab, Panel } from '@bumaga/tabs';
import Overview from '../Components/partials/Overview' 


export default function SafetyMeasures() {
  return (
      <div className = "container">
          <div class = "row">
              <div class = "col-12 card" style ={{backgroundColor:"#445175"}}>

              <Tabs>
                <div>
                  <Tab><button>Overview</button></Tab>
                  <Tab><button>Prevention</button></Tab>
                  <Tab><button>Symptoms</button></Tab>
                </div>

                <Panel><Overview /></Panel>
                <Panel><p>Panel 2</p></Panel>
                <Panel><p>panel 3</p></Panel>
              </Tabs>
               
              </div>
          </div>
      </div>
  );
}