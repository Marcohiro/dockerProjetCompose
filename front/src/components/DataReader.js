import React, { Component } from 'react';

class DataReader extends Component {
  constructor(props){
    super(props);
    this.state = {
    data: [],
    }
  }

componentDidMount() {
  var str = "";
  fetch('http://localhost:8080/get-data')
  .then(results => {
    const reader = results.body.getReader();
    reader.read().then(({ done, value }) => {
      if(done) console.log('reading done');
      str = new TextDecoder("utf-8").decode(value);
      console.log(str);
    })
    this.setState({data: str});
    console.log("state", this.state.data);
  })
}

render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default DataReader;