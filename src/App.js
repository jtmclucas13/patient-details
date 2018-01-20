import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PatientList } from './views';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <h1>Patient Details Hub</h1>
                <Route exact path="/" component={PatientList} />
            </div>
        </BrowserRouter>
    );
  }
}
