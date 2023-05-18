import React, {useEffect} from 'react';
import { firebase } from '../firebase';
import { useNavigate } from 'react-router';

const AuthGuard = (Component) => {
  const AuthHoc = (props) => {
    const navigate = useNavigate();
    const user = firebase.auth().currentUser;

  
       
    if (user) {
      return <Component {...props} />;
    } else {
      navigate('/');
      return null;
    }
  };

  return AuthHoc;
};

export default AuthGuard;


// import React from 'react';
// import {firebase} from '../firebase';
// import {Redirect} from 'react-router';

// // right now, dashboard directly loading but we create a function 
// //that will use firebase to check and authenticate user 

// const AuthGuard = (Component) =>{
//     class AuthHoc extends React.Component{

//         authCheck = () =>{
//             const user = firebase.auth().currentUser;

//             if(user){
//                 return <Component/>

//             }
//             else{
//                 return <Redirect to='/'/>

//             }
//         }
//         render(){
//             return this.authCheck()
//         }
//     }

//     return AuthHoc;

// }

// export default AuthGuard;
