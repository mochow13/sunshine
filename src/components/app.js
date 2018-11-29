import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import HelmetComp from './helmet';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style = {{
          color:"#333", textAlign: 'center', margin: "2%",
          fontWeight: 'bold',
          }}>Sushine Bangladesh!
        </h1>
        <HelmetComp />
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

