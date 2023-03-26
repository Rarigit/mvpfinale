<template>
    <div class="bodyWrap">
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
    <div v-for="predict in predictions" :key="predict.client_id" class="mx-auto">
        <v-row class="marketStyle mx-auto">
            <v-spacer></v-spacer>
            <v-col>
                <v-btn class="">{{ predict.client_id }}</v-btn>
            </v-col>
            <v-col>
                <h3 class="">{{ predict.created_at }}</h3>
            </v-col>
            <v-col>
                <h3 class="">$ {{ predict.predicted_price }}</h3>
            </v-col>
            <v-col>
                <h3 class="">{{ predict.duration_predict }}</h3>
            </v-col>
            <v-col>
                <h3 class="">{{ predict.predict_result }}</h3>
            </v-col>
            <v-col>
                <h3 class="">{{ predict.coin_name }}</h3>
            </v-col>
        </v-row> 
    </div>
    <br>
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
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import router from '@/router';

    export default {
        name: "PredictionsMain",
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                predictions: [],
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                cookies.remove('predictResult')
                router.push(`/`)
            }
        },
        mounted () {
            axios.request({
                method: "GET",
                url: this.url + "/predict",
                headers: {
                    'token' : cookies.get('clientToken'),
                }
                }).then((response)=>{
                console.log(response);
                this.predictions = response.data;
                console.log("Successfully retrieved prediction data");
                console.log("Success");
                this.createChart();
                }).catch((error)=>{                                   
                console.log(error);
                console.log("Error: Failed to retrieve predictions")
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