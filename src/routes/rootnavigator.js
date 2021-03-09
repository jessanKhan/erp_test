import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/home';
import Login from '../screens/auth/login';
import {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CheckInOut from '../screens/CheckInOUt/checkInOut';
import Attendance from '../screens/Attendence/attendence';
import Register from '../screens/Register/register';
import {GetUserINFO} from '../redux/auth/authAction';

const Stack = createStackNavigator();

function RootNavigator() {
  const [userData, setUserData] = useState();
  const user = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const loginValidate = useCallback((emailaddress, token) =>
    dispatch(GetUserINFO(emailaddress, token)),
  );

  return (
    <NavigationContainer>
      {user.authenticated == false ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Home} />
          <Stack.Screen name="CheckINOUT" component={CheckInOut} />
          <Stack.Screen name="Registration" component={Register} />
          <Stack.Screen name="Attandance" component={Attendance} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default RootNavigator;
