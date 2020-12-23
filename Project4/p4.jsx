import React from 'react';
import ReactDOM from 'react-dom';
import './p4.css';
import States from './components/states/States';
import Example from './components/example/Example';

function Switch (props) {
  if(props.value === true)
    return <States/>;
  else
      return <Example/>;
}
class Btn extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      value: !state.value}));
  }
  render(){
    return ([
      <button className="btn" key="0" onClick={this.handleClick} defaultValue={this.state.value}> Switch </button>,
      <Switch key="1" value={this.state.value} />
    ]
    );
  }
}
ReactDOM.render(
  <Btn />,
  document.getElementById('reactapp'),
);
