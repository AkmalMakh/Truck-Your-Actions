import React, { useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {NavigationEvents } from 'react-navigation';
import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const  SigninScreen = () =>{
  const {state ,signin, clearErrorMessage} = useContext(Context)
    return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      {/* // onWillFocus  //it calls when we tap to screen 
      // onDidFocus ={()=> // it calls when you land new screen 
      // it calls when you  leave the screen 
      // onDidBlur ={()=> //it calls when you complets */}
      
        <AuthForm 
        headerText = "Sign in to your Account"
        errorMessage = {state.errorMessage}
        submitButtonText = "Sign In"
        onSubmit = {signin}
        
        />
        <NavLink
        routeName = "Signup"
        text = "Dont have an account? Sign up intead?"
        />

    </View>
    );
}
SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    marginBottom: 230

  },
});

export default  SigninScreen;