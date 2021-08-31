import React from 'react';
import './App.css';
//import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
//import Contact from './components/Contact';
//import Resume from './components/Resume';
import Footer from './components/Footer';
// import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.cssr';


//PLAN TO REFACTOR IF IT DOESN'T WORK!!!!
function App() {
  return (
    <div>
      {/* <Nav></Nav> */}
      <main>
        <About />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
