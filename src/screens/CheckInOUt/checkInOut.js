import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Touchable,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {date} from 'yup/lib/locale';
import MapView from 'react-native-maps';
import {checkIn, checkOut, checkLogs} from '../../redux/checkIn/checkinAction';

const initialvalues = {
  accuracy: 20,
  altitude: 9.76598144143949,
  heading: 0,
  latitude: 23.8103,
  longitude: 90.4125,
  speed: 0,
};

const CheckInOut = ({Navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const CheckIN = useCallback((values) => dispatch(checkIn()));
  const CheckOUT = useCallback((values) => dispatch(checkOut()));
  // const CheckingLogCall= useCallback((values) => dispatch(checkOut()));
  const CheckinLogs = useCallback((values) =>
    dispatch(checkLogs('9w3UWrVsodzwwEWQF8ty8A==')),
  );
  const [location, setLocation] = useState(initialvalues);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [permission, setPermission] = useState(false);
  const [checkInState, setCheckInState] = useState(false);

  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setPermission(true);
    }
  }

  const checkInOutfunction = () => {
    const date = Date.now();
    if (checkInState === false) {
      CheckIN();
      setCheckInState(true);
    } else {
      CheckOUT();
      setCheckInState(false);
    }
  };

  useEffect(() => {
    requestPermissions();
    if (permission == true) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('location', position);
          // setLocation(position.coords);
          // setLat(position.coords);
          // setLon(position.coords.longitude);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        annotations={{
          latitude: 23.8103,
          longitude: 90.4125,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: 23.8103,
          longitude: 90.4125,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <Button
        type="outline"
        title={checkInState == false ? 'Check In' : 'Check Out'}
        titleStyle={{fontSize: 14, color: 'white'}}
        containerStyle={
          checkInState == false
            ? [{backgroundColor: '#5DD44B', width: 100}]
            : [{backgroundColor: '#F75B5B', width: 100}]
        }
        onPress={() => checkInOutfunction()}
      />
      <View>
        {/* <TouchableOpacity>Check In</TouchableOpacity>
        <TouchableOpacity>Check OUt</TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
  },

  buttonGreen: {
    color: 'green',
  },
  buttonRed: {
    color: 'red',
  },
});
export default CheckInOut;
