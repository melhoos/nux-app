import React from 'react';
import NavbarMenu from './components/navbarMenu';
import ContentWrapper from './components/contentWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

const App = () => {
  return (
      <div className="App">
        <NavbarMenu/>
        <ContentWrapper/>
      </div>
  );
}

export default App;
