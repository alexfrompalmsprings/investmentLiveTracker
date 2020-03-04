import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


//hard coded stuff needs to come from the DB
const options = [
  { value: 'btc usd', label: 'Bitcoin (usd)' },
  { value: 'ltc-usd', label: 'Litecoin (usd)' },
  { value: 'etc-usd', label: 'Ethereum (usd)' },
  { value: 'dash-usd', label: 'Dash (usd)' },
  { value: 'bch-usd', label: 'Bitcoin Cash (usd)' },
  { value: 'xmr-usd', label: 'Monero (usd)' },
  { value: 'doge-usd', label: 'DogeCoin (usd)' },
  { value: 'xrp-usd', label: 'Ripple (usd)' },
]

const animatedComponents = makeAnimated();



const SelectTicker = () => (
  <Select
  options={options}
  components={animatedComponents}
  isMulti
  placeHolder='Select Crypto Currency'
  isSearchable
  />
)

export default SelectTicker;
