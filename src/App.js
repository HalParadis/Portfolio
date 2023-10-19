import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

import {
  Contact,
  Portfolio
} from './components';

const App = () => {
  const history = useHistory();

  return (
    <>
      
      <div class='outer-box'>
        <Route exact path='/'>
          <div class='home-left-inner-box'>
            <div class='home-name-title-box'>
              
            </div>
            <div class='home-text-box'>

            </div>
          </div>
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        
        <nav>

        </nav>
      </div>
      

      
    </>

  )
}

export default App;