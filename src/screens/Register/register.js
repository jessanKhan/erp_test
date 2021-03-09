import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {DataTable} from 'react-native-paper';
const Register = ({params}) => {
  const [permission, setPermission] = useState(false);
  const user = useSelector((state) => state.Auth);
  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setPermission(true);
    }
  }

  useEffect(() => {
    requestPermissions();
    if (permission == true) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('location', position);
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
  }, [permission]);

  // useEffect(() => {
  //   const getData = async () =>
  //     await axios
  //       .get(
  //         `https://erp.ibos.io/partner/PManagementCommonDDL/GetCustomerListSalesForceDDL?EmployeeId=${id}a`,

  //         {
  //           headers: {
  //             Authorization: `Bearer ${result.token}`,
  //           },
  //         },
  //       )
  //       .then((res) => {
  //         console.log('sssssssssssssssss', res.data);
  //         return res.data;
  //       });

  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View>
        <Button title="Register" onPress={console.log('Registerd')} />
      </View>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Register in</DataTable.Title>
            <DataTable.Title numeric>Register Out</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>08/03/2021</DataTable.Cell>
            <DataTable.Cell numeric>2:00</DataTable.Cell>
            <DataTable.Cell numeric>4:00</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>07/03/2021</DataTable.Cell>
            <DataTable.Cell numeric>7:00</DataTable.Cell>
            <DataTable.Cell numeric>4:00</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
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
    height: 300,
    width: 410,
  },
});
export default Register;
