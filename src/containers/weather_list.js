import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/sparkline';
import GoogleMap from '../components/map'

class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        // flattening the temperatures found for a city in an array
        const temps = cityData.list.map(weather => weather.main.temp);
        const press = cityData.list.map(weather => weather.main.pressure);
        const humid = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
        // console.log(temps);
        return (            
            <tr key={cityName}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                    {cityName}
                </td>
                <td>
                    <Chart data = {temps} color = "orange" unit = "K" />
                </td>
                <td>
                    <Chart data = {press} color = "blue" unit = "HPa"/>
                </td>
                <td>
                    <Chart data = {humid}  color = "green" unit = "%"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className = "table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temper (K)</th>
                        <th>Pressure (HPa)</th>
                        <th>Humidty (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// ES6
function mapStateToProps({weather}) {
    return {weather};
}

// // Not ES6
// function mapStateToProps(state) {
//     return {
//         weather: state.weather,
//     };
// }

export default connect(mapStateToProps)(WeatherList);