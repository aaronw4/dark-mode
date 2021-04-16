import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  function date(y) {
    return new Date(y).toLocaleString();
  }

  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <div className='chart_title'>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <h2 className="coin__title">{coin.name} ({coin.symbol})</h2>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          <div className='stats'>
            <p className='info'>{coin.name} Price: ${coin.current_price}</p>
            <p className='info'>Circulating Supply: {numberWithCommas(coin.circulating_supply)}</p>
            <p className='info'>24h Low/24h High: ${coin.low_24h}/${coin.high_24h}</p>
            <p className='info'>Market Cap: ${numberWithCommas(coin.market_cap)}</p>
            <p className='info'>Total Supply: {coin.total_supply}</p>
            <p className='info'>All time high: ${numberWithCommas(coin.ath)} on {date(coin.ath_date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Charts;
