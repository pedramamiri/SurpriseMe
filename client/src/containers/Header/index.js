import React,
       { Component }   from 'react';
import './style.css'
import classNames      from 'classnames'; 
import LoginForm       from '../../components/LoginForm';
import Logo            from '../../components/Logo';
import { 
  ReactComponent as Close
  }                    from '../../assets/svg/close.svg';
import { connect }     from 'react-redux';
import { getFamilies } from '../../actions/familyActions';






class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginClicked : false
    }
  }
  loginClick = ()=>{
    this.setState({
      loginClicked : !this.state.loginClicked
    })
  }
  
  render() {
      return (
        <div className="Header">
            <Logo />
            <div className="login">
              <button onClick={this.loginClick}>{this.state.loginClicked ? <Close /> : 'Login'}</button>
              <LoginForm className={classNames(
                {
                  'open' : this.state.loginClicked,
                }
              )} 
              />
          
            </div>
        </div>
      );
    }
  }
  
export default Header;