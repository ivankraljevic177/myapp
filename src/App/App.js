import React, { Component } from 'react';
import styles from './App.module.css';
import Buttons from '../Buttons/Buttons';
import Address from '../Address/Address';

class App extends Component{

  



  render(){
    return (
      <div className={styles.App}>
        <header>
          CarAPP

        </header>
        <div>


          <Address  />
          <Buttons  />
        </div>
      </div>
    );
  }
}

export default App;
