// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React app jhj
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import * as React from 'react';
import HomePage from './components/views/homepage/HomePage.js';
import Collection from './components/views/collection/Collection.js';
import NavBar from './components/views/NavBar/NavBar.js';
// import About from './components/views/about/About.js';
import Contact from './components/views/contact/Contact.js';
import VidDivider from './components/views/vidDivider/VidDivider.js';
import Footer from './components/views/footer/Footer.js';
import { Container } from '@mui/material';
import ItemList from './components/views/Item/ItemList.js';
import { Element } from 'react-scroll';
import "../src/App.css";
function App() {
  return (
    <div  className='App'>
     
      <NavBar />
      <HomePage></HomePage><Element name="collection">
        <Collection></Collection>
      </Element>
      <Element name="about">
        {/* <About /> */}
      </Element>
      <Element name="itemList">
        {/* <ItemList /> */}
      </Element>

      <VidDivider></VidDivider>
      <Element name="contact">
        {/* <Contact /> */}
      </Element>
  

  
    <Footer></Footer>
   
    </div>
  );
}

export default App;