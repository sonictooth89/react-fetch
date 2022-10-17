import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount () { //pobierani danych zawsze tu!
    const xhr = new XMLHttpRequest(); // XmlHttpRequest
    xhr.open(
      'GET', 
      'https://jsonplaceholder.typicode.com/users',
      true); // true mowi ze jest asynchroniczne
      
      xhr.onload = () => { // w momencie odpowiedzi z serwera
        console.log(xhr.status);
        if(xhr.status === 200){
          const users = JSON.parse(xhr.responseText);
          console.log(typeof users);
          this.setState({ users });
        }
        //console.log(typeof xhr.response);
      }
      xhr.send(null); // bo nic nie wysylamy
    
  }
  render () {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ))
    return(
      <div>
        {users}
      </div>
    );
  };
};

export default App;
