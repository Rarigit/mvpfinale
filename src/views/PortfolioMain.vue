<template>
    <v-app>
    <TopPortBar/>
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
                    <h3 class="columnStyle">Profits &/Or Losses (P&L)</h3>
                </v-col>
            </v-row>
            <div v-for="portfolio in portfolios" :key="portfolio.client_id" class="mx-auto">
            <v-row class="marketStyle mx-auto">
                <v-spacer></v-spacer>
                <v-col>
                    <h3 class="">{{ portfolio.name }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">$ {{ portfolio.current_price }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">$ {{ portfolio.purchase_price }}</h3>
                </v-col>
                <v-col>
                    <h3 class="">{{ portfolio.quantity }}</h3>
                </v-col>
                <v-col class="highlight">
                    <h3 class="">$ {{ calculateROI(portfolio).profitOrLoss }}</h3>
                </v-col>
            </v-row> 
        </div> 
        <v-row class="marketStyle mx-auto">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-col>
                <h3 class="columnStyle totalHighlight">Total P&L: </h3>
            </v-col>
            <v-col>
                <h3 class="totalHighlight columnStyle">$ {{ totalProfitOrLoss }}</h3>
            </v-col>
        </v-row> 
        <br>
        <br>
        <div>
            <canvas ref="myChart" :height="chartHeight" :width="chartWidth" class="mt-n1"></canvas>
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
import Chart from 'chart.js/auto';


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
                loggedIn: false,
                interval: {},
                value: 0,
                isLoading: false,
                type: 'line',
                chartHeight: 1000,
                chartWidth: 1000,
                chart: null,
                chartData: {
                    labels: [],
                    datasets: [{
                    label: 'PRICE CHART',
                    data: [],
                    backgroundColor: [],
                    chartHeight: 1000,
                    chartWidth: 1000,
                    }],
                }
            }
        },
        computed: {
            totalProfitOrLoss() {
                let total = 0;
                this.portfolios.forEach((portfolio) => {
                    const { profitOrLoss } = this.calculateROI(portfolio);
                    total += Number(profitOrLoss);
                });
                return total.toFixed(2);
            },
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
                return {
                        profitOrLoss: profitOrLoss.toFixed(2),
                        totalInvestment: totalInvestment.toFixed(2),
                        currentPortValue: currentPortValue.toFixed(2),
                };
            },
            generateLabels() {
                return this.portfolios.map(portfolio => portfolio.name);
            },
            generateData() {
                return this.portfolios.map(portfolio => portfolio.quantity);
            },
            generateColors() {
                const fixedColors = [
                    '#FF6633',
                    '#B34D4D',
                    '#FFB399',
                    '#FF33FF',
                    '#FFFF99',
                    '#00B3E6',
                    '#E6B333',
                    '#3366E6',
                    '#999966',
                    '#99FF99',
                ]
                return this.portfolios.map((portfolio, index) => {
                    if (fixedColors[index]) {
                        return fixedColors[index];
                    }

                    const r = (index * 7) % 256;
                    const g = (index * 23) % 256;
                    const b = (index * 47) % 256;
                    return `rgb(${r}, ${g}, ${b})`;
                });
            },
            createChart() {
                this.chartData.labels = this.generateLabels();
                this.chartData.datasets[0].data = this.generateData();
                this.chartData.datasets[0].backgroundColor = this.generateColors();
                if(this.chart) {
                this.chart.destroy();
                }
                const config = {
                    type: 'pie',
                    data: this.chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        size: 16
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Portfolio Holdings',
                                font: {
                                    family: 'Arial',
                                    size: 30,
                                    weight: 'bold'
                                },
                                // width: 1000,
                                // height: 1000
                            }
                        },
                        // width: 1000,
                        // height: 1000
                    }
                };        
                this.chart = new Chart(this.$refs.myChart, config);
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
                console.log("Successfully retrieved client data");
                console.log("Success");
                this.createChart();
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
    background-color: rgb(255, 208, 0);
    font-weight: bold;
}

.totalHighlight {
    background-color: rgb(7, 255, 28);
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
    color: black;
}

.styleButton{
        color: white;
        height: 7vh;
        box-shadow: 2px 2px 3px;
    }

</style>