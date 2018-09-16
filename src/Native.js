import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGeoCoords } from './actions/nativeActions';

class Native extends Component {
    componentDidMount() {
        this.props.getGeoCoords();
    }

    render() {
        return (
            <span>
                { window.cordova ? (
                    <p>
                        Your location: { this.props.geo.latitude }, { this.props.geo.longitude }
                    </p>
                ) : null }
            </span>
        );
    }
}

Native.PropTypes = {
    getGeoCoords: PropTypes.func.isRequired,
    geo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    geo: state.native.geo
});

export default connect(mapStateToProps, { getGeoCoords })(Native);