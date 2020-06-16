import React from 'react';
import QuickFacts from '../homepage/partials/QuickFacts';
import WorldCovid19Stats from '../homepage/partials/WorldCovid19Stats'

export default function Homepage() {
  return (
      <div class = "container-fluid">
          <div class = "row">
            <div class = "col-12 col-sm-12 col-md-4">
              <QuickFacts></QuickFacts>
            </div>

            <div class = "col-12 col-sm-12 col-md-8">
              <WorldCovid19Stats></WorldCovid19Stats>
            </div>
          </div>
      </div>
  );
}