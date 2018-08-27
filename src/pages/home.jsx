import React, { Component } from 'react';
import axios from 'axios';

class home extends Component {
    
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

    constructor(props) {
        super(props);
        this.testChild = this.testChild.bind(this);
      }

      testChild() {
          let tes = document.getElementById('exchange').value;
          console.log(tes);
          var base = this.state.currency.base;
          var toExchange = this.state.currency.rates.tes;
          var xEqual = this.state.currency.rates.IDR * 10.0000;
          var str = "<div class='card col-md-12 plpr-0'><li class='list-group-item text-left pAll-0 fs-12'><div class='form-group'><label class='float-left mb-05'><b>IDR</b></label><label class='float-right'><b>"+ xEqual +"</b></label></div><p class='text-left mb-0imp'>IDR-Indonesian Rupiah</p><p class='text-left mb-0imp'>1"+ base +"= IDR"+ toExchange +"</p></li></div>";
          var bes = document.getElementById( 'li-card' );
          bes.insertAdjacentHTML( 'beforeend', str );
      }
      
    render () {
        if (!this.state.currency.rates) {
            return null;
          }

        return (
            <div className="App">
            <h1 class="display-4">Currency</h1>
            <div class="d-flex justify-content-center">
                <div class="card col-md-3 plpr-0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-left">
                    <label><i>USD-United States Dollars</i></label>
                    <div class="form-group">
                        <label class="float-left"><b>USD</b></label>
                        <label class="float-right"><b>10.0000</b></label>
                    </div>
                    </li>
                    <li class="list-group-item" id="li-card">
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
                    </li>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="exchange" name="exchange" placeholder="JPY, CAD, GBP" aria-label="exchange" aria-describedby="basic-addon2"></input>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" onClick={this.testChild} type="submit">Submit</button>
                        </div>
                    </div>
                </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default home