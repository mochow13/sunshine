import React, {Component} from 'react';

export default class GoogleMap extends Component {
    // This is a lifecycle method that gets called automatically after 
    // the component has been rendered to the screen.
    componentDidMount() {
        /* Creating an embedded google map inside our DOM.
        google.maps.Map takes a reference to an HTML element and
        renders the embedded map into the element.*/
        new google.maps.Map(this.refs.map,{
            // declaring the property of the map
            zoom: 12,
            center: {
                lat: this.props.lat, // lattitude should be passed to GoogleMap component
                lng: this.props.lon, // longitude should be passed to GoogleMap component
            }
        });
    }
    render() {
        // This allows us to refer this div component with this.refs.map
        return <div ref="map" />;
    }
}