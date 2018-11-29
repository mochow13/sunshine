import _ from 'lodash';
import React, {Component} from 'react';
/* Reference: https://github.com/borisyankov/react-sparklines */
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function getAverage(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height = {120} width={180} data = {props.data}>
                <SparklinesLine color = {props.color} />
                <SparklinesReferenceLine type = "avg"/>
            </Sparklines>
            <div>{getAverage(props.data)} {props.unit}</div>
        </div>
    );
}