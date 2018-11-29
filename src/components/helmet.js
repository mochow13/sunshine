import React, {Component} from "react";
import {Helmet} from "react-helmet";
 
export default class HelmetComp extends Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sunshine</title>
            </Helmet>
        </div>
    );
  }
};