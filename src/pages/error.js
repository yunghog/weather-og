import React, { Component } from "react";
import '../style/style.css';

import axios from 'axios'

class Error extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
    setTimeout(function () {
      window.location.href="/";
    }, 3000);
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
          <h1>Error 404. Invalid Location</h1>
          <p>Redirecting to Homepage</p>
        </div>
      </div>
    );
  }
}

export default Error;
