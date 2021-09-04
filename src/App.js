import React, { useState } from 'react';
import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
//import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.cssr';

//Function that starts the application
function App() {
  //useState to set the current page
  const [currentComponent, setCurrentComponent] = useState('About');

  //function that will render all components to the browser
  function renderBrowser() {
    if (currentComponent === 'About') {
      return <About />
    } else if (currentComponent === 'Portfolio') {
      return <Portfolio />
    } else if (currentComponent === 'Contact') {
      return <Contact />
    } else if (currentComponent === 'Resume') {
      return <Resume />
    }
  }

  return (
    <div>
      <main>
        <Nav setCurrentComponent={setCurrentComponent} />
        {renderBrowser()}
        <Footer />
      </main>
    </div>
  );
}

export default App;
