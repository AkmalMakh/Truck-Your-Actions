import createDataContext from './createDataContext';

const authReducer = (state, action) =>{
    switch (action.type) {
        
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({email, password }) =>{
        // make api request to sign up

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
    {signin, signout, signup},
    { isSignedIn: false}
);