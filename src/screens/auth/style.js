import {StyleSheet, Dimensions} from 'react-native';

// let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2E3B55',
  },
  header: {
    height: 300,
  },
  submitButton: {
    width: 120,
    height: 60,
    marginTop: 30,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 14,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'white',
  },
  warning: {fontSize: 13, color: 'red', marginLeft: 20},
  inputLabel: {
    marginLeft: 20,
  },
  container: {
    flex: 1,
  },
});

export default styles;
