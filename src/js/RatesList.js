import React from 'react';

import axios from 'axios';

export default class RatesList extends React.Component {
    state = {
        currency: {}
      };
    
      componentDidMount() {
        axios
          .get("https://api.exchangeratesapi.io/latest?base=USD")
          .then(response => {
            const currency = response.data;
            this.setState({ currency: currency,
            currencyRateA: currency.rates.AUD }); 
            console.log(currency.rates.AUD)
          })
      }

  render() {

    if (!this.state.currency.rates) {
      return null;
    }
    
    return (
        <div class="card col-md-12 plpr-0">
          <li class="list-group-item text-left pAll-0 fs-12">
            <div class="form-group">
              <label class="float-left mb-05"><b>IDR</b></label>
              <label class="float-right"><b>{this.state.currency.rates.IDR * 10.0000}</b></label>
            </div>
            <p class="text-left mb-0imp">IDR-Indonesian Rupiah</p>
            <p class="text-left mb-0imp">1 {this.state.currency.base} = IDR {this.state.currency.rates.IDR}</p>
          </li>
        </div>
    )
  }
}