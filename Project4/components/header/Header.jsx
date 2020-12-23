import React from 'react';
import './Header.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:"Header component"
    }
  }
  render(){
    return(
      <div className="header">
         <img src="http://localhost:3000/components/header/winter-glow.jpg" alt="logo" height="100%" width="100%" className="header-img" />
      </div>
    );
  }
}
export default Header;
