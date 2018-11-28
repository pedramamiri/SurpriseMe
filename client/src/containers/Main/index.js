import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import FrontPage from '../FrontPage';


class Main extends Component {
  
    render() {
      return (
        <div className="Main">
            <Switch>
                <Route exact path='/' component={FrontPage}/>
            </Switch>  
        </div>
      );
    }
  }
  
export default Main;