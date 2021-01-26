// import {AsyncStorage} from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) =>{
    switch (action.type) {
        
        case 'add_error': 
            return {... state, errorMessage: action.payload }; // ... means take old state and add new one to the same state
        case 'signup':
            return {errorMessage: '',token: action.payload};
        default:
            return state;
    }
};
const signup = dispatch => async ({ email, password }) => {
    try { 
        
      const response = await trackerApi.post('/signup', { email, password });
     
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
  
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      });
    }
  };

const signin = (dispatch) => {
    return ({email, password }) =>{
        // try to sign in
        // handdle the success by updating state 
        // Handle failure by showing error message

    };
};

const signout = (dispatch) => {
    return () =>{
        //sign out
    };
};


export const {Provider, Context} = createDataContext(

    authReducer,
    {signup, signin, signout},
    { token: null, errorMessage: ''}
);