import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    player: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          user: res
        });
        console.log(res);
      })
      .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
  }

  render() {
  return (
    <div className="App">
      <h1>Welcome to your Github followers card!</h1>
    </div>
    );
    }
  }

export default App;