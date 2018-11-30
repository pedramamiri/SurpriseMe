import React, { Component } from 'react';
import classNames from 'classnames'; 
import './style.css';

class LoginForm extends Component {
  
    render() {
      return (
        <div className={classNames(
            'LoginForm',
            this.props.className
        )}>
            
        </div>
      );
    }
  }
  
export default LoginForm;