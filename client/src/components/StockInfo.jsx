import React from 'react';
import InfoCard from './InfoCard.jsx';

//import axios from 'axios';


class StockInfo extends React.Component{
  constructor(props){
      super(props);
      this.BASE_URL = "https://api.cryptonator.com/api/ticker/";
      this.state = {
          btcusd: '-',
          ltcusd: '-',
          ethusd: '-',
          xrpusd: '-',
          bchusd: '-',
          dogeusd: '-',
          xmrusd: '-',
          zecusd: '-',
          initValue: 0,
          time: '-'
      }
  }


  componentDidMount() {
      this.getDataFor('btc-usd', 'btcusd');
      this.getDataFor('ltc-usd', 'ltcusd');
      this.getDataFor('eth-usd', 'ethusd');
      this.getDataFor('xrp-usd', 'xrpusd');
      this.getDataFor('dash-usd', 'dashusd');
      this.getDataFor('doge-usd', 'dogeusd');
      this.getDataFor('bch-usd', 'bchusd');
      this.getDataFor('xmr-usd', 'xmrusd');
      this.getDataFor('zec-usd', 'zecusd');
  }

  getDataFor(conversion, prop){
    fetch(this.BASE_URL + conversion, {
        mode: 'cors'
    })

    .then(res => res.json())

    .then(data => {
      console.log('this is the data -->', data)
      this.setState({
          [prop]: data.ticker.price
      });
    })

  }



  render(){
    return (
    <div>
      <div>
        <InfoCard header="Bitcoin (BTC)" src={'/bitcoin.png'} alt="fireSpot" label="(Price in USD)" time={this.state.time}  value={this.state.btcusd} />
        <InfoCard header="Litecoin (LTC)"   src={'/litecoin.png'} alt="fireSpot" label="(Price in USD)" time={this.state.time}   value={this.state.ltcusd}/>
        <InfoCard header="Ethereum (ETH)" src={'/ethereum.png'} alt="fireSpot" label="(Price in USD)"  time={this.state.time}    value={this.state.ethusd}/>
        <InfoCard header="Dash (DASH)" src={'/dash.png'} alt="fireSpot" label="(Price in USD)"  time={this.state.time}   value={this.state.dashusd}/>
        <InfoCard header="Bitcoin Cash (BCH)" src={'/bitcoincash.png'} alt="fireSpot" label="(Price in USD)"  time={this.state.time}   value={this.state.bchusd}/>
        <InfoCard header="Monero (XMR)" src={'/monero.png'} alt="fireSpot" label="(Price in USD)"  time={this.state.time}   value={this.state.xmrusd}/>
        <InfoCard header="Doge (DOGE)" src={'/dogecoin.png'} alt="fireSpot" label="(Price in USD)" time={this.state.time}    value={this.state.dogeusd}/>
        <InfoCard header="Ripple(XRP)" src={'/ripple.png'} alt="fireSpot" label="(Price in USD)" time={this.state.time}    value={this.state.xrpusd}/>
      </div>
    </div>
    )
  }
}

export default StockInfo;