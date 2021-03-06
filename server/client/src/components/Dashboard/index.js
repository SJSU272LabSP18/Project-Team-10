import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Zones from './Zones/Zones';
import Sites from './Sites/Sites';
import Nodes from './Nodes/Nodes';
import Locations from './Locations/Locations';
import Navbar from '../Navbar/Navbar';
import AddNode from './Nodes/AddNodes';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="wrapper">
              <div className="main-panel">
                <Navbar />
                <Route exact path="/dashboard/sites" component={Sites} />
                <Route exact path="/dashboard/zones" component={Zones} />
                <Route
                  exact
                  path="/dashboard/locations/:locationId/zones"
                  component={Zones}
                />
                <Route
                  exact
                  path="/dashboard/:siteId/locations"
                  component={Locations}
                />
                <Route
                  exact
                  path="/dashboard/locations"
                  component={Locations}
                />
                <Route
                  exact
                  path="/dashboard/zones/:zoneId/nodes"
                  component={Nodes}
                />
                <Route exact path="/dashboard/nodes" component={Nodes} />
                <Route
                  exact
                  path="/dashboard/zones/:zoneId/noaa"
                  component={AddNode}
                  AddNode
                />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Dashboard;
