import React from 'react';
import Axios from 'axios';
import Chart from 'chart.js'
import {Line} from 'react-chartjs-2'
export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpi : []
    }

    this.getPrices();
  }

  getPrices() {
    Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-09-02&end=2019-10-02')
      .then(data => {
        this.setState({
          bpi: data.data.bpi
        })
      })
  }

  render() {
    return (<div>
      <Line data={{
        labels: Object.keys(this.state.bpi),
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(this.state.bpi),
        }]
    }} />
    <div>Powered by CoinDesk</div>
    </div>)
  }
}