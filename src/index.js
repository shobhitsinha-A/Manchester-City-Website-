import React from 'react';
import { createRoot } from 'react-dom';
import './Resources/css/app.css'
import { firebase } from './firebase';
import Routes from './routes';

const App = (props) => {
  return(
    <Routes{...props} />
  )
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );

// firebase.auth().onAuthStateChanged((user)=>{
//   // console.log(user);
//   ReactDOM.render(<App user={user}/>,document.getElementById('root'));
// })

// firebase.auth().onAuthStateChanged((user) => {
//   ReactDOM.createRoot(document.getElementById('root')).render(<App user={user} />);
// });


// firebase.auth().onAuthStateChanged((user) => {
//   createRoot(document.getElementById('root')).render(<App user={user} />);
// });

const root = createRoot(document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
  root.render(<App user={user} />);
});