<template>
    <div class="bodyWrap">
        <HeaderMvp/>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-row class="mx-auto black--text">
            <h1 class="mx-auto pFont">PortFolio Register</h1>
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
                                                    v-model="formData.name"
                                                    :rules="[() => !!formData.name || 'This field is required']"
                                                    label="Enter Coin Name"
                                                    placeholder="John"
                                                    prepend-icon="mdi-currency-btc"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.purchasePrice"
                                                    label="Enter Purchase Price"
                                                    prepend-icon="mdi-cash"
                                                    placeholder="Doe"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.quantity"
                                                    label="Enter quantity"
                                                    prepend-icon="mdi-shovel"
                                                    placeholder="Doe"
                                                    />
                                                    <v-text-field
                                                    v-model="formData.clientEmail"
                                                    :rules="emailRules"
                                                    label="Enter e-mail"
                                                    prepend-icon="mdi-email"
                                                    />
                                                    <br>
                                                    <br>
                                                    <v-row class="mx-auto">
                                                        <v-btn color="green" large class="styleButton" @click="postFolio">PortFolio Register</v-btn>
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
                <v-btn color="black white--text" large class="styleButton" router-link to="/portfolio">Portfolios</v-btn>
                    <v-spacer></v-spacer>
            </v-row>
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
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies"
import HeaderMvp from "@/components//HeaderMvp.vue";
import FooterMvp from "@/components/FooterMvp.vue";


    export default {
        name: "RegisterFolio",
        components: {
            HeaderMvp,
            FooterMvp
        },
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                show1: false,
                formData: {
                    clientId: "",
                    name: "",
                    purchasePrice: "",
                    quantity: "",
                    clientEmail: "",
                },
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => (`The email and password you entered don't match`),
                },
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                cookies.remove('portfolioId')
                router.push(`/`)
            },
            postFolio() {
                axios.request({
                    method: "POST",
                    url: this.url + "/portfolio",
                data: {
                    clientId: this.formData.clientId,
                    name: this.formData.name,
                    purchasePrice: this.formData.purchasePrice,
                    quantity: this.formData.quantity,
                    clientEmail: this.formData.clientEmail,
                }
                }).then((response)=>{
                    console.log(response)
                    console.log("Successfully registered new portfolio!")
                    let portId = response.data.portId;
                    cookies.set(`portfolioId`, portId)
                    router.push('/portProfile')
                }).catch((error)=>{
                    console.log(error);
                    alert("Error: Please ensure that the coin selected is from the list of coins provided, also please verify that the purchase-price that you've inputted is below the ATH price of that coin");
                })
            }
        },
        mounted () {
            this.$root.$emit('portfolioId');
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
.pFont {
    font-family: 'Lato', sans-serif;
}



</style>