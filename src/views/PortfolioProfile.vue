<template>
    <div class="bodyWrap">
    <HeaderMvp/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-row class="marketStyle mx-auto">
        <v-spacer></v-spacer>
        <v-col>
            <h3 class="columnStyle">Portfolio Id#</h3>
        </v-col>
        <br>
        <v-col>
            <h3 class="columnStyle">Coin Names</h3>
        </v-col>
        <br>
        <v-col>
            <h3 class="columnStyle">Purchase Price per Coin</h3>
        </v-col>
        <br>
        <v-col>
            <h3 class="columnStyle">Quantity of Coins Held</h3>
        </v-col>
        <br>
    </v-row>
    <div v-for="portfolio in portfolios" :key="portfolio.client_id" class="mx-auto">
        <v-row class="marketStyle mx-auto">
            <v-spacer></v-spacer>
            <v-col>
                <v-btn class="">{{ portfolio.id }}</v-btn>
            </v-col>
            <v-col>
                <h3 class="">{{ portfolio.name }}</h3>
            </v-col>
            <v-col>
                <h3 class="">$ {{ portfolio.purchase_price }}</h3>
            </v-col>
            <v-col>
                <h3 class="">{{ portfolio.quantity }}</h3>
            </v-col>
        </v-row> 
        </div>
        <br>
        <br>
        <ModifyFolio/>
        <br>
        <v-row class="mx-auto">
            <v-spacer></v-spacer>
            <v-btn color="black" large class="styleButton" @click="logOut">Client Logout</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="black" large class="styleButton" router-link to="/portfolio">Portfolios</v-btn>
            <v-spacer></v-spacer>
        </v-row>
        <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <FooterMvp/>
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import router from '@/router';
import HeaderMvp from "@/components/HeaderMvp.vue";
import FooterMvp from "@/components/FooterMvp.vue";
import ModifyFolio from "@/components/ModifyFolio.vue";

    export default {
        name: "PortfolioProfile",
        components: {
            HeaderMvp,
            FooterMvp,
            ModifyFolio,
        },
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                portfolios: [],
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                cookies.remove('portfolioId')
                router.push(`/`)
            }
        },
        mounted () {
            // const allCookies = cookies.get();
            // const headers = {};
            // for (const cookieName in allCookies) {
            //     headers[cookieName] = allCookies[cookieName];
            // }
            axios.request({
                method: "GET",
                url: this.url + "/portfolio",
                // headers: headers
                headers: {
                    'token' : cookies.get('clientToken'),
                    // 'portId': cookies.get('portfolioId_1')
                }
                }).then((response)=>{
                console.log(response);
                this.portfolios = response.data;
                
                // this.portfolios.forEach((portfolio) => {
                //     cookies.set(`portfolioId_${portfolio.id}`, portfolio.id)
                // });
                console.log("Successfully retrieved client data");
                console.log("Success");
                this.createChart();
                }).catch((error)=>{                                   
                console.log(error);
                console.log("Error: Failed to retrieve data")
                // router.push(`/portProfile`)
                });
            
        },
    }
</script>

<style scoped>

.bodyWrap{
        background-image: url("https://imgs.search.brave.com/tx5-FkCpUvzin3WUBdZCKwlE-7ejg-niWAoXHIbM-O0/rs:fit:1200:1080:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNi9Eb3dubG9h/ZC1MaWdodC1CbHVl/LUhELUJhY2tncm91/bmRzLmpwZw");
        background-repeat: no-repeat;
        background-size: cover;
    }
.styleButton{
        color: white;
        height: 12vh;
        box-shadow: 2px 2px 3px;
    }

.columnStyle {
    color: rgb(210, 1, 252);
}

</style>