import React, { Component } from 'react';

class DataReader extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }

componentDidMount() {
  fetch('http://localhost:8085/get-data')
  .then(res => {
      return res.json()
   })
  .then(users => { 
      this.setState(Object.values(users));
   });
}

render() {
  console.log(this.state.users.length);
  const toRender = this.state.users.map( user => {
    <div>
      <p>Id : {user.id}</p>
    </div>
  })
    return (
      <div>
        <p>Affichage</p>
        {toRender}
      </div>
    );
  }
}

export default DataReader;