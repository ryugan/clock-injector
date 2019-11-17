import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import ColorSelect from './components/ColorSelect'

function App() {

  return (
    <div className="App">
      <header className="App-header">Clock injector</header>
      <div className="App-body container">
        <div className="row">
          <div className="col-sm-4 offset-sm-1">
            <label htmlFor="backgoundcolor"><i className="fa fa-paint-brush" id="colorBrush"></i>&nbsp;Couleur du fond :</label>
          </div>
          <div className="col-sm-1">
            <ColorSelect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
