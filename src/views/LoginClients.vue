<template>
    <div class="bodyWrap">
        <HeaderMvp/>
        <br>
        <v-row>
            <h1 class="mx-auto">Portfolio Sign In</h1>
        </v-row>
        <br>
        <br>
        <div>
            <v-alert v-model="error" type="error" :value="true">Warning: Incorrect Email and/or Password</v-alert>
        </div>
        <br>
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
                                                    v-model="formData.email"
                                                    :rules="emailRules"
                                                    label="Enter e-mail"
                                                    prepend-icon="mdi-email"
                                                    required
                                                    />
                                                    <v-spacer></v-spacer>
                                                    <v-text-field
                                                    v-model="formData.password"
                                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :rules="[rules.required, rules.min]"
                                                    :type="show1 ? 'text' : 'password'"
                                                    name="input-10-1"
                                                    label="Enter password"
                                                    hint="At least 8 characters"
                                                    counter
                                                    @click:append="show1 = !show1"
                                                    />
                                                    <br>
                                                    <br>
                                                    <v-row class="mx-auto ">
                                                        <v-btn color="blue" large class="ml-5 white--text" @click="logClients">Client Login</v-btn>
                                                    </v-row>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <v-spacer></v-spacer>
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
                                                <h2 class="text-center">No account?</h2>
                                                <h4 class="text-center">
                                                    Get set up here
                                                </h4>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn tile outlined dark class="ml-5" router-link to="/registerClient">Register as Client</v-btn>
                                            </div>
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
        </v-container>
        <FooterMvp/>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import router from '@/router';
import HeaderMvp from "@/components/HeaderMvp.vue";
import FooterMvp from "@/components/FooterMvp.vue";
    export default {
        name: "LoginClients",
        components: {
            HeaderMvp,
            FooterMvp
        },
        data() {
            return {
                show1: false,
                url: process.env.VUE_APP_API_URL,
                formData: {
                    email: "",
                    password: "",
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
                error: false,
            }
        },
        methods: {
            logClients() {
                axios.request({
                    method: "POST",
                    url: this.url + "/clients-session",
                data: {
                    email: this.formData.email,
                    password: this.formData.password,
                }
                }).then((response)=>{
                console.log(response);
                console.log("Client logged in successfully");
                let user = response.data.clientId;
                cookies.set(`client`, user)
                let userToken = response.data.token;
                cookies.set(`clientToken`, userToken);
                router.push(`/clientProfile`)
                }).catch((error)=>{
                console.log(error);
                this.error = true
                })
            }
        },
    }
</script>

<style scoped>
.bodyWrap{
        background-image: url(@/assets/logwhite.png);
        /* background-color: #f8ebdf; */
        background-repeat: no-repeat;
        background-size: cover;
    }

button{
        color: aqua;
        height: 4vh;
    }


</style>