import React,
       { Component }   from 'react';
import './style.css'
import classNames      from 'classnames'; 
import { connect }     from 'react-redux';
import PropTypes       from 'prop-types';
import { addFamily } from '../../actions/familyActions';


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
    const form = {
      familyName:this.familyName,
      familyCode:this.password,
      admin:this.name,
      members:[ ...this.state.members ]
    }
    this.props.addFamily(form);
  }
  
  render() {
      return (
        <div className="Signup">
          <div className="signupForm">
            <div className="admin">
              <label>Name:</label>
              <input ref={el => this.name = el} type="text"/>
            </div>
            <div className="admin">
              <label>Family name:</label>
              <input ref={el => this.familyName = el} type="text"/>
            </div>
            <div className="admin">
              <label>Password:</label>
              <input ref={el => this.password = el} type="password"/>
            </div>
            <div className="admin">
              <label>Email:</label>
              <input ref={el => this.email = el} type="email" />
            </div>
            <div className="member">
              <p>Add a member</p>
              <label>Members name</label>
              <input ref={el => this.memberName = el} type="text" id="memberName" />
              <label>Members Email</label>
              <input ref={el => this.memberEmail = el} type="email" id="memberEmail" />
              <button onClick={this.addMember} id="addMember">+</button>
            </div>
            <div className="submit">
              <button onClick={this.submit}>Submit</button>
            </div>
          </div> 
          <div className="memberList">
            {
              this.state.members.map(member=><p style={{padding:"5px",width:"70%",backgroundColor:"rgb(201, 25, 25)",color:"white",borderRadius:"5px"}}>{member.name}</p>)
            }
          </div>
        
        </div>
      );
    }
  }



const mapStateToProps = (state)=>({
  addFamily: state.addFamily
}) 
  
export default connect(mapStateToProps,{addFamily})(Signup);