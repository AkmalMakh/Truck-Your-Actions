import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) =>{
    switch (action.type) {
        
        case 'add_error': 
            return {... state, errorMessage: action.payload }; // ... means take old state and add new one to the same state

        default:
            return state;
    }
};

const signup =  (dispatch) => {
    return async({email, password }) =>{
        // make api request to sign up
        try {
            const response = await trackerApi.post('/signup', {email,password});
            console.log(response.data);
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong sign up'})
        }

        // if we sing up modify our state,  and sya that we are authenticated

        // if singing up fails, we probably need to refflect
    };
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
    { isSignedIn: false, errorMessage: ''}
);