import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'yassine mander',
        bio: 'A passionate developer',
        imgSrc: '',
        profession: 'DEV'
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = Math.floor((currentTime - this.state.mountTime) / 1000);
      this.setState({ timeSinceMounted: timeDiff });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        <p>Time since mounted: {timeSinceMounted} seconds</p>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>Profession: {person.profession}</p>
            <p>Bio: {person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
