<template>
    <div class="bodyWrap">
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-row class="mx-auto black--text">
            <h1 class="mx-auto pFont">Modify your Portfolio</h1>
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
                                                    <v-text-field
                                                    v-model="id"
                                                    label="Enter Portfolio ID:"
                                                    placeholder="John"
                                                    prepend-icon="mdi-account"
                                                    />
                                                    <v-text-field
                                                    v-model="name"
                                                    label="Enter Coin Name"
                                                    placeholder="John"
                                                    prepend-icon="mdi-currency-btc"
                                                    />
                                                    <v-text-field
                                                    v-model="purchasePrice"
                                                    label="Enter Purchase Price"
                                                    prepend-icon="mdi-cash"
                                                    placeholder="Doe"
                                                    />
                                                    <v-text-field
                                                    v-model="quantity"
                                                    label="Enter quantity"
                                                    prepend-icon="mdi-shovel"
                                                    placeholder="Doe"
                                                    />
                                                    <br>
                                                    <br>
                                                    <v-row class="mx-auto">
                                                        <v-btn color="green" large class="styleButton" @click="editFolio">PortFolio Edits</v-btn>
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
                                                    Bitcoin, Ethereum, Tether, BNB, Litecoin, Avalanche, Matic, Uniswap, Solana, Polkadot
                                                </h2>
                                                <br>
                                                <br>
                                            </v-card-text>
                                            <div class="text-center">
                                                <h2 class="text-center">Are you sure you want to delete?</h2>
                                                <h3 class="text-center">
                                                    Delete your profile here
                                                </h3>
                                                <DeleteFolio/>
                                            </div>
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
import cookies from "vue-cookies"
import DeleteFolio from "@/components/DeleteFolio.vue"

    export default {
        name: "ModifyFolio",
        components: {
            DeleteFolio,
        },
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                show1: false,
                id: "",
                name: "",
                purchasePrice: "",
                quantity: "",
            }
        },
        methods: {
            editFolio() {
                axios.request({
                    method: "PATCH",
                    url: this.url + "/portfolio",
                    // headers: this.headers,
                    headers: {
                        'portId' : cookies.get('portfolioId_1'),
                        'token' : cookies.get('clientToken'),
                    },
                    data: {
                        id: this.id,
                        name: this.name,
                        purchasePrice: this.purchasePrice,
                        quantity: this.quantity,
                    },
                    }).then((response) =>{
                    console.log(response);
                    console.log("Successful updated portfolio")
                    alert("Successfully updated portfolio")
                    }).catch((error)=>{
                    console.log(error);
                    console.log("Error: Failed to update portfolio")
                    alert("Error: Failed to update portfolio")
                    })
            }
        },
        mounted () {
            const allCookies = cookies.get();
            this.headers = {};
            for (const cookieName in allCookies) {
                this.headers[cookieName] = allCookies[cookieName];
            }
        },
    }

</script>

<style scoped>

</style>