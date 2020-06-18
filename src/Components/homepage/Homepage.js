import React from 'react';
import QuickFacts from '../homepage/partials/QuickFacts';
import WorldCovid19Stats from '../homepage/partials/WorldCovid19Stats'

export default function Homepage() {
  return (
      <div className = "container-fluid">
          <div className = "row">
            <div className = "col-12 col-sm-12 col-md-2">
              <QuickFacts></QuickFacts>
            </div>

            <div className = "col-12 col-sm-12 col-md-10">
              <WorldCovid19Stats></WorldCovid19Stats>
            </div>
          </div>
      </div>
  );
}