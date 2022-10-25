import React, { Component } from 'react';
import background from "./bgrnd.jpg";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }




  render() {
    const myStyle={
        backgroundImage:`url(${background})`,
        height:'100vh',
        marginTop:'-400px',
        marginLeft:'-70px',
        fontSize:'25px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        };
    const logo = {

      textAlign: "center",
      marginTop: '250px'

    };
    const username = {

      textAlign: "center",
      marginTop: '50px',
      fontSize:'20px',

    };
    const password = {

      textAlign: "center",
      marginTop: '-520px',
      fontSize:'20px',

    };
  return (

    <div>
      <h1 style={logo}> JumpStarter </h1> 

      <h2 style={username}>      
       <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </h2>
      <body style={myStyle}>

      </body>
        <h2 style={password}>      
       <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </h2>

    </div>

  );
}
}

export default App;
