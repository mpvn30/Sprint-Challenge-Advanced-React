import React from 'react';
import Players from './components/players'
import Nav from './components/nav'
import axios from 'axios'
import './styles.scss';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log(res.data, `res-data`);
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
      <Nav />
      <Players players={this.state.players}/>
    </div>
    );
    }
  }

export default App;
