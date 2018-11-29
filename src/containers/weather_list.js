import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        // flattening the temperatures found for a city in an array
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return (            
            <tr key={cityName}>
                <td>{cityName}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className = "table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidty</th>
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