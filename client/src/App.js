import React from 'react';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Style from './App.module.css'
function App() {
  return (
    <div className={Style.App}>
    	<Header />
    	<Main />
    	<Footer />
    </div>
  );
}

export default App;
