import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: '',
      lastName: '',
      firstName: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/insert', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

render() {
    const { userId, lastName, firstName } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <p>Numero ID</p>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
          </div>
          <div>
            <p>last name</p>
            <input type="text" name="lastName" value={lastName} onChange={this.changeHandler}/>
          </div>
          <div>
            <p>first name</p>
            <input type="text" name="firstName" value={firstName} onChange={this.changeHandler}/>
          </div>
          <button type="submit">
            Submit  
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;