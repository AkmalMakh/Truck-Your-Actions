import React, { useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AuthContext from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const  SigninScreen = () =>{
  //const {state ,signin} = useContext(AuthContext)
    return (
    <View style={styles.container}>
        <AuthForm 
        headerText = "Sign in to your Account"
        errorMessage = {""}
        submitButtonText = "Sign In"
        onSubmit = {()=>{}}
        
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