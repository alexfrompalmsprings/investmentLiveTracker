import React from 'react';
import axios from 'axios';

import AddingTicker from './AddingTicker.jsx'
import SelectTicker from './SelectTicker.jsx'

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
        <AddingTicker />
        </div>

        <br></br>

        <div>
        <SelectTicker />
        </div>

        <br></br>

        <div>
        <StockInfo />
        </div>
      </div>

      );
  }
}

export default App;
