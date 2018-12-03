import React,
       { Component }   from 'react';
import './style.css'
import classNames      from 'classnames'; 
import { connect }     from 'react-redux';
import PropTypes       from 'prop-types';
import { addFamily } from '../../actions/familyActions';
import uuid from 'uuid';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      members:[]
    }
  }

  addMember = ()=>{
    this.setState({
      members:[
        ...this.state.members,
        {
          name : this.memberName.value,
          email: this.memberEmail.value
        }
      ]
    })
  }
  submit = ()=>{
   this.props.addFamily({
    familyName:this.familyName.value,
    familyCode:this.password.value,
    admin:this.name.value,
    members:[ ...this.state.members ]
   });
   /*console.log({
    familyName:this.familyName.value,
    familyCode:this.password.value,
    admin:this.name.value,
    members:[ ...this.state.members ]
   })*/
  }
  
  render() {
      return (
        <div className="Signup">
          <div className="signupForm">

            <label>Name:</label>
            <input ref={el => this.name = el} type="text"/>
            <label>Family name:</label>
            <input ref={el => this.familyName = el} type="text"/>
            <label>Password:</label>
            <input ref={el => this.password = el} type="password"/>
            <label>Email:</label>
            <input ref={el => this.email = el} type="email" />
          
            <h3>Add a member</h3>
            <label>Members name</label>
            <input ref={el => this.memberName = el} type="text" id="memberName" />
            <label>Members Email</label>
            <input ref={el => this.memberEmail = el} type="email" id="memberEmail" />
            <button onClick={this.addMember} id="addMember">+</button>
          
            <button onClick={this.submit}>Submit</button>
            
          </div> 
          <ul className="memberList">
            {
              this.state.members.map(member=>
              {
                if(member.name){
                  return <li key={uuid()}>{member.name}</li>
                }
                return ""
              })
            }
          </ul>
        
        </div>
      );
    }
  }



const mapStateToProps = (state)=>({
  addFamily: state.addFamily
}) 
  
export default connect(mapStateToProps,{addFamily})(Signup);