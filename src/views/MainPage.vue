<template>
  <v-app id="home">
    <v-container>
      <h1>BETCOIN APP</h1>
      <br>
      <div>
        {{ marketBtc }}
      </div>
      <!-- <div v-for="market in marketBtc" :key="market.id">
        {{ market.ath }} 
        {{ data.atl }}
        {{ data.current_price }}
        {{ data.circulating_supply }}
        {{ data.market-cap_rank }}
        {{ data.name }}
        {{ data.total_supply }} 
      </div>  -->
    </v-container>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <FooterMvp/>
  </v-app>
</template>

<script>
import FooterMvp from "@/components/FooterMvp.vue"
import axios from 'axios'

  export default {
    name: "MainPage",
    components: {
      FooterMvp,
    },
    data() {
      return {
        url: process.env.VUE_APP_API_URL,
        marketBtc : []
      }
    },
    methods: {
      getBitcoin() {
        axios.request({
          method: "GET",
          url: this.url + "/market-btc"
        }).then((response)=>{
          this.marketBtc = response.data
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    mounted () {
      this.getBitcoin();
    },
}
</script>

<style scoped>

</style>
