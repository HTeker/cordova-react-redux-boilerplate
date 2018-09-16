import { GET_GEO_COORDS } from './types';

export const getGeoCoords = () => dispatch => {
        if(window.cordova) {
            navigator.geolocation.getCurrentPosition((position) => {
                //this.setState({ geo: position.coords });
                dispatch({
                    type: GET_GEO_COORDS,
                    payload: position.coords
                });
            }, (error) => {

            });
        }
}