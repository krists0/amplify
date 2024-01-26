
// import * as React from 'react';
// import HomePage from './components/views/homepage/HomePage.js';
// import Collection from './components/views/collection/Collection.js';
// import NavBar from './components/views/NavBar/NavBar.js';
// import About from './components/views/about/About.js';
// import Contact from './components/views/contact/Contact.js';
// import VidDivider from './components/views/vidDivider/VidDivider.js';
// import Footer from './components/views/footer/Footer.js';
// import { Container } from '@mui/material';
// import ItemList from './components/views/Item/ItemList.js';
// import { Element } from 'react-scroll';
// import "../src/App.css";
// import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import awsconfig from './aws-exports';
// // import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// Amplify.configure(awsconfig);
// function App() {                
//   return (  
//     <div  className='App'>
     
//       <NavBar />
//       <HomePage></HomePage>
//       <Element name="collection">
//         <Collection></Collection>
//       </Element>
//       <Element name="about">
//         <About />
//       </Element>
//       <Element name="itemList">
//         <ItemList />
//       </Element>

//       <VidDivider></VidDivider>
//       <Element name="contact">
//         <Contact />
//       </Element>
  

  
//     <Footer></Footer>
   
//     </div>
//   );
// }

// export default App;
// export default withAuthenticator(App);


// import React, { useEffect, useState } from 'react';
// import { Container } from '@mui/material';
// import { Amplify, Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { Element } from 'react-scroll';
// import NavBar from './components/views/NavBar/NavBar';
// import HomePage from './components/views/homepage/HomePage';
// import Collection from './components/views/collection/Collection';
// import About from './components/views/about/About';
// import Contact from './components/views/contact/Contact';
// import VidDivider from './components/views/vidDivider/VidDivider';
// import Footer from './components/views/footer/Footer';
// import ItemList from './components/views/Item/ItemList';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from '../src/Login';
// Amplify.configure(awsconfig);

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     Auth.currentAuthenticatedUser()
//       .then((user) => {
//         const groups = user.signInUserSession.idToken.payload['cognito:groups'];
//         if (groups.includes('Manager')) {
//           setUserRole('Manager');
//         } else {
//           setUserRole('User');
//         }
//       })
//       .catch(() => {
//         setUserRole('User'); // Default to User role if no user is authenticated
//       });
//   }, []);

//   return (
//     <Router>
//     <div className="App">

//       <NavBar />
//       <Routes>
//           <Route path="/" element={<HomePage />} />
         
//           <Route path="/login" element={<Login />} />
         
//         </Routes>
//         <h1>USER ROLE :  {userRole }</h1>
//       <HomePage />
//       <Element name="collection">
//         <Collection />
//       </Element>
//       <Element name="about">
//         <About />
//       </Element>
      
//         <Element name="itemList">
//           <ItemList userRole={userRole}/>
//         </Element>
      
//       <VidDivider />
//       <Element name="contact">
//         <Contact />
//       </Element>
//       <Footer />
//     </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Element } from 'react-scroll';
import NavBar from './components/views/NavBar/NavBar';
import HomePage from './components/views/homepage/HomePage';
import Collection from './components/views/collection/Collection';
import About from './components/views/about/About';
import Contact from './components/views/contact/Contact';
import VidDivider from './components/views/vidDivider/VidDivider';
import Footer from './components/views/footer/Footer';
import ItemList from './components/views/Item/ItemList';
import {  BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Login from '../src/Login';
Amplify.configure(awsconfig);

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        if (groups.includes('Manager')) {
          setUserRole('Manager');
        } else {
          setUserRole('User');
        }
      })
      .catch(() => {
        setUserRole('User'); // Default to User role if no user is authenticated
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Create a new route for the manager dashboard */}
          <Route
            path="/dashboard"
            element={
              userRole === 'Manager' ? (
                <ItemList />
              ) : (
                <Navigate to="/" /> // Redirect non-managers to the home page
              )
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ItemList />} />
        </Routes>
      
        {/* <HomePage /> */}
        <Element name="collection">
          <Collection />
        </Element>
        <Element name="about">
          <About />
        </Element>

        <Element name="itemList">
          <ItemList userRole={userRole} />
        </Element>

        <VidDivider />
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </Router>
  );
}

export default App;