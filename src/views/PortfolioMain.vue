<template>
    <v-app>
        <!-- Put Portfolio get request in here -->
    <TopPortBar/>
    <br>
    <br>
            <v-row class="marketStyle mx-auto">
                <v-spacer></v-spacer>
                <v-col>
                    <h3 class="columnStyle">Coin Names</h3>
                </v-col>
                <v-col>
                    <h3 class="columnStyle">Current Price per Coin</h3>
                </v-col>
                <v-col>
                    <h3 class="columnStyle">Purchase Price per Coin</h3>
                </v-col>
                <v-col>
                    <h3 class="columnStyle">Quantity of Coins Held</h3>
                </v-col>
                <v-col class="highlight">
                    <h3 class="columnStyle">Return On Investment (ROI)</h3>
                </v-col>
            </v-row>
            <div v-for="portfolio in portfolios" :key="portfolio.client_id" class="mx-auto">
            <v-row class="marketStyle mx-auto">
                <v-spacer></v-spacer>
                <v-col>
                    <h3 class="">{{ portfolio.name }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">${{ portfolio.current_price }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">${{ portfolio.purchase_price }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">{{ portfolio.quantity }}</h3>
                </v-col>
                <v-col class="highlight">
                    <h3 class="">{{ calculateROI(portfolio) }} %</h3>
                </v-col>
            </v-row> 
        </div>                   
    <VertNav/>
    <FooterMvp/>
    </v-app>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import router from '@/router';
import TopPortBar from "@/components/TopPortBar.vue"
import VertNav from "@/components/VertNav.vue";
import FooterMvp from "@/components/FooterMvp.vue";


    export default {
        name: "PortfolioMain",
        components: {
            TopPortBar,
            VertNav,
            FooterMvp,
        },
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                portfolios: [],
                loggedIn: false
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                router.push(`/`)
                this.loggedIn = false
            },
            calculateROI(portfolio) {
                const currentPrice = portfolio.current_price;
                const purchasePrice = portfolio.purchase_price;
                const quantity = portfolio.quantity;
                const totalInvestment = purchasePrice * quantity;
                const currentPortValue = currentPrice * quantity;
                const profitOrLoss = currentPortValue - totalInvestment;
                const roi = (profitOrLoss / totalInvestment) * 100;
                return roi.toFixed(2);
            },
        },
        mounted () {
            axios.request({
                method: "GET",
                url: this.url + "/portfolio",
                headers: {
                    'token' : cookies.get('clientToken'),
                },
                }).then((response)=>{
                console.log(response);
                this.portfolios = response.data;
                console.log("Successfully retrieved client data")
                console.log("Success")
                }).catch((error)=>{
                console.log(error);
                console.log("Error: Access Denied!")
                router.push(`/loginClient`)
                }); 
        },
    }
</script>

<style scoped>

.highlight {
    background-color: rgb(109, 255, 109);
    font-weight: bold;
}

.marketStyle {
    display: flex;
    flex-direction: row;
    justify-items: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid black;
    width: 1930px;
    background-color: cyan;
}

.columnStyle {
    color: purple;
}

.styleButton{
        color: white;
        height: 7vh;
        box-shadow: 2px 2px 3px;
    }

</style>