import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Technologies from './components/Technologies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Technologies />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
