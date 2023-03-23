<template>
    <v-app-bar color="#029aff" flat class="mt-0" height="100vh">
        <v-row class="mx-auto">
            <!-- Gonna put a get request on this page and display current User's name below -->
            <v-spacer></v-spacer>
            <div v-for="client in clients" :key="client.id">
                <h2 class="black--text mt-2">Welcome back: {{ client.first_name }}</h2>
            </div>
        </v-row>
        <v-spacer></v-spacer>
        <v-row class="mx-auto">
            <div v-for="client in clients" :key="client.id">
                <h2 class="black--text mt-2">Client Id #: {{ client.id }}</h2>
            </div>
        </v-row>
    </v-app-bar>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import router from '@/router';

    export default {
        name: "TopPortBar",
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                clients: [],
                loggedIn: false
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                router.push(`/`)
                this.loggedIn = false
            }
        },
        mounted () {
            axios.request({
                method: "GET",
                url: this.url + "/clients",
                headers: {
                    'token' : cookies.get('clientToken'),
                },
                }).then((response)=>{
                console.log(response);
                this.clients = response.data;
                console.log("Successfully retrieved client data")
                console.log("Success")
                }).catch((error)=>{
                console.log(error);
                console.log("Error: Access Denied!")
                // router.push(`/loginClient`)
                }); 
        },
    }
</script>

<style scoped>

.portStyle{
    font: black;
    justify-content: center;
    display: flex;
    justify-self: center;
    align-items: center;
}

</style>