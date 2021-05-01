import React, { Component } from "react";
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class Loading1 extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){

  }
  render() {
    const errorDiv={
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      color: '#fffd',
      backgroundColor: '#111'
    };
    const errorText={
      margin: 'auto',
      padding: '20px',
      border: '1px solid #fff2',
      borderRadius: '20px'
    };
    return (
      <div style={errorDiv}>
        <div style={errorText}>
          <h1>Loading <FontAwesomeIcon className="spin" icon={faCog}></FontAwesomeIcon></h1>
          <p>Please turn on the device location</p>
        </div>
      </div>
    );
  }
}

export default Loading1;
