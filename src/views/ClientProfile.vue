<template>
    <div class="bodyWrap">
    <HeaderMvp/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-container v-if="!loggedIn">
        <div v-for="client in clients" :key="client.id">
            <v-row>
                <h2 class="mx-auto black--text">{{client.email}}</h2>
                <h2 class="mx-auto black--text">{{client.first_name}}</h2>
                <h2 class="mx-auto black--text">{{client.last_name}}</h2>
                <h2 class="mx-auto clack---text">{{client.username}}</h2>
            </v-row>
        </div>
        <br>
        <br>
        <EditClients/>
        <br>
        <br>
        <br>
        <br>
        <v-row class="mx-auto">
            <v-btn color="light-blue" large class="styleButton" @click="logOut">Client Logout</v-btn>
        </v-row>
        <br>
        <br>
        <br>
        <v-row class="mx-auto">
            <v-btn color="light-blue" large class="styleButton" router-link to="/portfolio">Portfolios</v-btn>
        </v-row>
        <br>
    </v-container>
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
import FooterMvp from "@/components/FooterMvp.vue"
import EditClients from "@/components/EditClients.vue";

    export default {
        name: "ClientProfile",
        components: {
            HeaderMvp,
            FooterMvp,
            EditClients
        },
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
                router.push(`/loginClient`)
                });
        },
    }
</script>

<style scoped>

.bodyWrap{
        /* background-color: #f8ebdf; */
        background-image: url(@/assets/logwhite.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
.styleButton{
        color: white;
        height: 7vh;
        box-shadow: 2px 2px 3px;
    }

</style>