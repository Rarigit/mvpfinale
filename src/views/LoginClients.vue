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
            <v-form class="d-flex align-center">
                <v-text-field
                v-model="formData.email"
                :rules="emailRules"
                label="E-mail"
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
                label="Enter Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
                />
                <br>
                <br>
                <br>
                <v-btn color="green" large class="ml-5" @click="logClients">Client Login
                </v-btn>
                <br>
                <v-spacer></v-spacer>
                <br>
                <v-btn class="ml-5" router-link to="/registerClient">Register as Client
                </v-btn>
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
            </v-form>
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
                apiKey: process.env.VUE_APP_API_KEY,
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
                router.push(`/watch-list`)
                }).catch((error)=>{
                console.log(error);
                this.error = true
                })
            }
        },
        mounted () {
            //Deletes cookies after i press the back button. Hopefully it works
            window.onbeforeunload = function() {
            document.cookie = "clientToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "client=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            };
        },
    }
</script>

<style scoped>
.bodyWrap{
        /* background-image: url(https://imgs.search.brave.com/HLeqRVTtcQlw4vwIJr8tkCJawN5obKK30DKXmuxJ1LA/rs:fit:920:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/VWpPUENZSE5ZV2Qx/Z3NJRmU3bldRSGFE/MCZwaWQ9QXBp); */
        background-color: #f8ebdf;
        background-repeat: no-repeat;
        background-size: cover;
    }

button{
        color: aqua;
        height: 4vh;
    }


</style>