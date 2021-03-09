import React from 'react';
import {useEffect} from 'react';
import {useState, useCallback} from 'react';
import {View, Text, FlatList, Button, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout, GetUserINFO} from '../../redux/auth/authAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import jwt_decode from 'jwt-decode';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const menuItem = [
  {
    id: 2,
    title: 'Check In / OUT',
    color: '#87CEEB',
    image: 'https://img.icons8.com/office/70/000000/home-page.png',
    route: 'CheckINOUT',
  },

  {
    id: 7,
    title: 'Registration',
    color: '#00FFFF',
    image: 'https://img.icons8.com/dusk/70/000000/checklist.png',
    route: 'Registration',
  },

  {
    id: 9,
    title: 'Attandance List',
    color: '#191970',
    image: 'https://img.icons8.com/color/70/000000/to-do.png',
    route: 'Attandance',
  },
  {
    id: 9,
    title: 'Logout',
    color: '#191970',
    image: 'https://img.icons8.com/color/70/000000/shutdown.png',
    route: 'logout',
  },
];

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);

  const Logout = useCallback(() => dispatch(logout()));
  const GetInfo = useCallback((emailaddress, token) =>
    dispatch(GetUserINFO(emailaddress, token)),
  );

  useEffect(() => {
    // GetInfo(user.info.emailaddress, user.token);s
    console.log('value', user);
  }, [user]);
  const clickEventListener = (item) => {
    if (item.route != 'logout') {
      navigation.navigate(item.route);
    } else {
      Logout();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={menuItem}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  style={[styles.card, {backgroundColor: item.color}]}
                  onPress={() => {
                    clickEventListener(item);
                  }}>
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[styles.title, {color: item.color}]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default Home;
