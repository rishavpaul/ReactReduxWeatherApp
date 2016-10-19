import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperatureList = cityData.list.map(weather => (weather.main.temp - 273) )
        const pressureList = cityData.list.map(weather => weather.main.pressure)
        const humidityList = cityData.list.map(weather => weather.main.humidity)
        const lng = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return (
            <tr key={cityName}>
                <td><GoogleMap lng={lng} lat={lat}/></td>
                <td><Chart data={temperatureList} color="orange" units="°C"/></td>
                <td><Chart data={pressureList} color="green" units="hPa"/></td>
                <td><Chart data={humidityList} color="black" units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
        <table className="table table-hover">
            <thead >
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa) </th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather};
}

// export the connected version of weatherlist
export default connect(mapStateToProps)(WeatherList);