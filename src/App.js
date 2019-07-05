import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './styles.global.scss';
import Profile from './containers/Profile'
import Header from './components/Header'
import Map from './components/Map'


class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Map />
        <Profile />

      </div>
    );
  }
}

export default App;
