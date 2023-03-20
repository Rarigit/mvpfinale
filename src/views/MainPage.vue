<template>
  <div>
  <OpeningMain/>
  <v-app class="dark-back">
    <HeaderMvp/>
    <br>
    <br>
    <br>
    <br>
    <v-container>
      <br>
      <br>
      <v-row>
        <v-col>
          <h3 class="columnStyle">Logo</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">Name</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">Price</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">MarketCap</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">Rank</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">Total-Supply</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">Trading Vol.</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">ATH</h3>
        </v-col>
        <v-col>
          <h3 class="columnStyle">ATL</h3>
        </v-col>
      </v-row>
      <div class="text-center">
      <v-progress-circular v-if="isLoading" :rotate="360" :size="100" :model-value="value" :width="10" color="blue" indeterminate class="progress"> {{ value }} </v-progress-circular>
      </div>
        <div v-for="coin in marketCoin" :key="coin.name">
            <v-row class="marketStyle">
              <v-col>
                <img class="coinImage" :src="coin.images" alt="" >
              </v-col>
              <v-col>
                <h3 class="">{{ coin.name }}</h3>
              </v-col>
              <v-col>
                <h3 class="">${{ coin.current_price }}</h3>
              </v-col>
              <v-col>
                <h3 class="">${{ coin.market_cap }}</h3>
              </v-col>
              <v-col>
                <h3 class="">{{ coin.market_cap_rank }}</h3>
              </v-col>
              <v-col>
                <h3 class="">{{ coin.total_supply }}</h3>
              </v-col>
              <v-col>
                <h3 class="">${{ coin.total_volume }}</h3>
              </v-col>
              <v-col>
                <h3 class="">${{ coin.ath }}</h3>
              </v-col>
              <v-col>
                <h3 class="">${{ coin.atl }}</h3>
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
  </v-app>
  </div>
</template>

<script>
import FooterMvp from "@/components/FooterMvp.vue"
import axios from 'axios'
import Chart from 'chart.js/auto';
import HeaderMvp from "@/components/HeaderMvp.vue";
import OpeningMain from "@/components/OpeningMain.vue";

  export default {
    name: "MainPage",
    components: {
      OpeningMain,
      HeaderMvp,
      FooterMvp,
    },
    data() {
      return {
        url: process.env.VUE_APP_API_URL,
        marketCoin : [],
        interval: {},
        value: 0,
        isLoading: false,
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
      loadData() {
        this.isLoading = true;
      },
      getAllcoin() {
        axios.request({
          method: "GET",
          url: this.url + "/market-coin"
        }).then((response)=>{
          this.marketCoin = response.data
          this.updateChart();
          this.isLoading = false;
        }).catch((error)=>{
          console.log(error);
          this.isLoading = false;
        })
      },
      // I want a 1 hour x-axis loop, and the y-axis to be price
      generateLabels() {
        const labels = [];
        for (let i = 0; i <=9; i++) {
          const name = this.marketCoin[i].name;
          labels.unshift(name);
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
        const config = {
          type: 'bar',
          data: this.chartData,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Logarithmic Token vs Price Chart',
                font: {
                  family: 'Arial',
                  size: 20,
                  weight: 'bold'
                }
              }
            },
            scales: {
              x: {
                display: true,
                ticks: {
                  font: {
                    family: 'Arial',
                    size: 16,
                    weight: 'bold'
                  },
                  // max: Math.max(...this.marketCoin.map(d => d.name))
                  },
                title: {
                  display: true,
                  text: 'Token Name',
                  font: {
                    family: 'Arial',
                    size: 18,
                    weight: 'bold'
                  },
                }
              },
              y: {
                display: true,
                type: 'logarithmic',
                ticks: {
                  beginAtZero: true,
                  font: {
                    family: 'Arial',
                    size: 16,
                    weight: 'bold'
                  },
                  max: Math.max(...this.marketCoin.map(d => d.current_price))
                  },
                  title: {
                    display: true,
                    text: 'Price Data',
                    font: {
                      family: 'Arial',
                      size: 18,
                      weight: 'bold'
                    }
                  }
                }
              }
            }
          };
          config.data.datasets[0].backgroundColor = 'green';
          this.chart = new Chart(this.$refs.myChart, config);
      },
      beforeUnmount () {
        clearInterval(this.interval)
      },
    },
    mounted () {
      this.loadData();
      this.getAllcoin();
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
      if (!this.intervalValid) {
        this.intervalValid = setInterval(() => {
          // this.isLoading = true;
          this.getAllcoin();
            // .then(() => {
              // this.isLoading = false;
            // });
        }, 1 * 60 * 1000);
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalValid);
      this.intervalValid = null;
    },
    watch: {
        marketCoin: function() {
          this.updateChart();
        }
    },
}
</script>

<style scoped>

.dark-back{
  background-color: white;
}

.progress {
  margin: 1rem;
}
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
