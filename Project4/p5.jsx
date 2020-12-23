import React from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Hash extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
      <div >
      <ul>
        <li><Link  to="/example">Example</Link></li>
        <li><Link  to="/states">States</Link></li>
        <Route path="/example" component={Example} />
        <Route path="/states" component={States} />
      </ul>
      </div>
			</Router>
    );
  }
}
ReactDOM.render(
  <Hash />,
  document.getElementById('reactapp'),
);
