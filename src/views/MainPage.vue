<template>
  <div class="body">
    <HeaderMvp/>
    <br>
    <br>
    <v-container>
      <br>
      <br>
      <v-row>
        <v-col>
          <h2 class="columnStyle">Logo</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">Name</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">Price</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">MarketCap</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">Rank</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">Total-Supply</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">Trading Vol.</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">ATH</h2>
        </v-col>
        <v-col>
          <h2 class="columnStyle">ATL</h2>
        </v-col>
      </v-row>
      <div v-for="coin in marketCoin" :key="coin.name">
          <v-row class="marketStyle">
            <v-col>
              <img class="coinImage" :src="coin.images" alt="" >
            </v-col>
            <v-col>
              <h2 class="">{{ coin.name }}</h2>
            </v-col>
            <v-col>
              <h2 class="">${{ coin.current_price }}</h2>
            </v-col>
            <v-col>
              <h2 class="">${{ coin.market_cap }}</h2>
            </v-col>
            <v-col>
              <h2 class="">{{ coin.market_cap_rank }}</h2>
            </v-col>
            <v-col>
              <h2 class="">{{ coin.total_supply }}</h2>
            </v-col>
            <v-col>
              <h2 class="">${{ coin.total_volume }}</h2>
            </v-col>
            <v-col>
              <h2 class="">${{ coin.ath }}</h2>
            </v-col>
            <v-col>
              <h2 class="">${{ coin.atl }}</h2>
            </v-col>
          </v-row>                    
      </div>
        <br>
        <br>
        <br>
        <br>
      <div>
        <canvas ref="myChart" :height="chartHeight" :width="chartWidth"></canvas>
      </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </v-container>
    <FooterMvp/>
  </div>
</template>

<script>
import FooterMvp from "@/components/FooterMvp.vue"
import axios from 'axios'
import Chart from 'chart.js/auto';
import HeaderMvp from "@/components/HeaderMvp.vue";



  export default {
    name: "MainPage",
    components: {
      HeaderMvp,
      FooterMvp,
    },
    data() {
      return {
        url: process.env.VUE_APP_API_URL,
        marketCoin : [],
        type: 'line',
        chartHeight: 2.5,
        chartWidth: 5,
        chart: null,
        chartData: {
          labels: [],
          datasets: [{
            label: 'PRICE CHART',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }],
        }
      }
    },
    methods: {
      getAllcoin() {
        axios.request({
          method: "GET",
          url: this.url + "/market-coin"
        }).then((response)=>{
          this.marketCoin = response.data
          this.updateChart();
        }).catch((error)=>{
          console.log(error);
        })
      },
      // I want a 1 hour x-axis loop, and the y-axis to be price
      generateLabels() {
        const labels = [];
        // const now = new Date();
        for (let i = 0; i <=9; i++) {
          // const date = new Date(now.getTime() - (i * 15 * 60 * 1000));
          const volume = this.marketCoin[i].name;
          labels.unshift(volume);
          // const hour = date.getHours();
          // const minute = date.getMinutes();
          // const label = `${hour}:${minute < 10 ? '0' + minute : minute}`;
          // labels.unshift(label);
        }
        return labels
      },
      generateData() {
        if (this.marketCoin.length > 0) {
          return [this.marketCoin[9].current_price, this.marketCoin[8].current_price, this.marketCoin[7].current_price, this.marketCoin[6].current_price,
                this.marketCoin[5].current_price, this.marketCoin[4].current_price, this.marketCoin[3].current_price, this.marketCoin[2].current_price, 
                this.marketCoin[1].current_price, this.marketCoin[0].current_price];
        } else {
          return [];
        }  
      },
      updateChart() {
        this.chartData.labels = this.generateLabels();
        this.chartData.datasets[0].data = this.generateData();
        if(this.chart) {
          this.chart.destroy();
        }
        this.chart = new Chart(this.$refs.myChart, 
        {
          type: this.type,
          data: this.chartData,
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  stepSize: 100,
                  max: Math.max(...this.marketCoin.map(d => d.current_price))
                  }
                }],
              }
            }
          }
        );
      },
    },
    mounted () {
      this.getAllcoin();
    },
    watch: {
        marketCoin: function() {
          this.updateChart();
        }
    },
}
</script>

<style scoped>

.marketStyle {
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #d7d7d7;
  width: 1750px;
}

.coinImage{
  width: 2.5vw;
  height: 5vh;
}
.columnStyle {
  color: lightseagreen
}
</style>
