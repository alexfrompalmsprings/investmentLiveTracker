import React from 'react';
import axios from 'axios';

import InfoCard from './InfoCard.jsx'
import StockInfo from './StockInfo.jsx'

class App extends React.Component {
  constructor() {
    super();

  }



  render() {
    return (

      <div>
        <div>
        <StockInfo />
        </div>
      </div>

      );
  }
}

export default App;
