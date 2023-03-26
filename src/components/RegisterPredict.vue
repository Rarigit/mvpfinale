<template>
    <div class="bodyWrap">
        <br>
        <br>
        <br>
        <v-row class="mx-auto black--text">
            <h1 class="mx-auto pFont">Make a Prediction</h1>
        </v-row>
        <br>
        <br>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10">
                    <v-card class="elevation-6 mt-10">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-card-text class="mt-12">
                                            <v-row align="center" justify="center">
                                                <v-col cols="12" sm="8">
                                                <!-- <div class="formData"> -->
                                                    <v-text-field
                                                    v-model="formData.clientId"
                                                    label="Enter clientId"
                                                    placeholder="JohnDoe7"
                                                    prepend-icon="mdi-mouse"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.predictedPrice"
                                                    label="Enter Prediction"
                                                    placeholder="John"
                                                    prepend-icon="mdi-currency-usd"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.durationPredict"
                                                    label="Enter Duration of Prediction in HH:MM:SS"
                                                    prepend-icon="mdi-clock"
                                                    placeholder="Doe"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.coin"
                                                    label="Enter Coin"
                                                    prepend-icon="mdi-currency-btc"
                                                    placeholder="Doe"
                                                    />
                                                <!-- </div> -->
                                                    <br>
                                                    <br>
                                                    <v-row class="mx-auto">
                                                        <v-btn color="green" large class="styleButton" @click="postPredict">Predict</v-btn>
                                                    </v-row>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                                        <div style="text-align:center; padding: 180px 0;">
                                            <v-card-text class="white--text">
                                                <h1 class="text-center">Select only from the following coins: </h1>
                                                <br>
                                                <h2 class="text-center black--text">
                                                    Bitcoin, Ethereum, BNB, Polygon, Solana, Polkadot, Litecoin, Avalanche, Uniswap, Chainlink
                                                </h2>
                                            </v-card-text>
                                            <br>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
            <br>
            <br>
            <br>
            <v-row class="mx-auto">
                    <v-spacer></v-spacer>
                <v-btn color="black white--text" large class="styleButton" @click="logOut">Client Logout</v-btn>
                    <v-spacer></v-spacer>
                <v-btn color="black white--text" large class="styleButton" router-link to="/predictions">Predictions Home</v-btn>
                    <v-spacer></v-spacer>
            </v-row>
            <br>
            <br>
            <br>
            <br>
            <br>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies"

    export default {
        name: "RegisterPredict",
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                show1: false,
                formData: {
                    clientId: "",
                    predictedPrice: "",
                    durationPredict: "",
                    coin: "",
                },                                           
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                cookies.remove('predictResult')
                router.push(`/`)
            },
            postPredict() {
                axios.request({
                    method: "POST",
                    url: this.url + "/predict",
                data: {
                    clientId: this.formData.clientId,
                    predictedPrice: this.formData.predictedPrice,
                    durationPredict: this.formData.durationPredict,
                    coin: this.formData.coin,
                }
                }).then((response)=>{
                    console.log(response)
                    let predict_result = response.data.predict_result;
                    cookies.set('predictResult', predict_result)
                    console.log("Successfully registered new prediction!")
                    router.push('/predictions')
                }).catch((error)=>{
                    console.log(error);
                    alert("Error: Prediction failed to register");
                })
            },
        },
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
.pFont {
    font-family: 'Lato', sans-serif;
}

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

</style>