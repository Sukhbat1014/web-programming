import React from 'react';
import './States.css';
import Header from '../header/Header';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list:window.cs142models.statesModel(),


    }
    //this.handleChange = event=> this.handleChange(event);
    // the method that handles the event.
    this.handleChangeBound = event => this.handleChange(event);
    this.handleChange = this.handleChange.bind(this);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    console.log('window.cs142models.statesModel()[0]', window.cs142models.statesModel()[0]);

  }

  handleChange(event){
    this.setState({ inputValue: event.target.value,
    list:window.cs142models.statesModel().filter(value=>{
      if(value.toLowerCase().search(event.target.value)!=-1)
      return {value}})
    }
    );
  }
//{window.cs142models.statesModel().map((cityNames, i)=><li key={i +1}>{cityNames}</li>)}
  render(){
    return (
      <div className="container">
      <Header/>
      <div>Enter name of city:
      <input minLength="20" id="markdown-content" onChange={this.handleChange} defaultValue={this.state.inputValue}
      />
      <ul id="u" defaultValue={this.state.inputValue} >
          {this.state.list.map(item => (
                <li>{item}</li>
              ))}
      </ul>
      <ul id="new">

      </ul>
      </div>
      </div>
    );
  }
}

export default States;
