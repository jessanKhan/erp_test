import React, {useState, useCallback, useEffect} from 'react';
import {KeyboardAvoidingView, Text, View, Platform} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import * as yup from 'yup';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {signIn} from '../../redux/auth/authAction';
import styles from './style';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const Login = useCallback((values) =>
    dispatch(signIn(values.email, values.password)),
  );
  const onSubmit = (values) => {
    console.log(values);
    Login(values);
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.container}></KeyboardAvoidingView>
      <View style={styles.header}>
        <Text>Company LOGO</Text>
      </View>

      <Formik
        initialValues={({email: ''}, {password: ''})}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => onSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          touched,
        }) => (
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <Input
              placeholder="Email"
              //   leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              style={styles.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.warning}>{errors.email}</Text>
            )}
            <Text style={styles.inputLabel}>Password</Text>
            <Input
              placeholder="Password"
              style={styles.inputStyle}
              secureTextEntry={true}
              //   leftIcon={<Icon name="key" size={24} color="black" />}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {/* <TouchableOpacity
                style={{paddingLeft: 15}}
                onPress={() => navigation.navigate('ForgotPassword?')}>
                <Text>Forgot Password ?</Text>
              </TouchableOpacity> */}
            {errors.password && touched.password && (
              <Text style={styles.warning}>{errors.password}</Text>
            )}
            <View style={styles.submitButton}>
              <Button
                onPress={handleSubmit}
                title="Login"
                titleStyle={{fontSize: 14}}
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
      <KeyboardAvoidingView />
    </ScrollView>
  );
};

export default Login;
