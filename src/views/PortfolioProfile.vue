<template>
    <div class="bodyWrap">
    <HeaderMvp/>
    <br>
    <v-container v-if="!loggedIn">
        <v-row>
            <h1 class="mx-auto">Client Profile</h1>
        </v-row>
        <br>
        <br>
        <br>
        <div v-for="client in clients" :key="client.id">
            <v-row>
                <h2 class="mx-auto">{{client.username}}</h2>
                <h2 class="mx-auto">{{client.firstName}}</h2>
                <h2 class="mx-auto">{{client.lastName}}</h2>
                <h2 class="mx-auto">{{client.email}}</h2>
            </v-row>
        </div>
        <br>
        <br>
        <v-row>
            <v-btn class="mx-auto styleButton" router-link to="">Placeholder
        </v-btn>
        </v-row>
        <br>
        <EditClients/>
        <br>
        <v-row>
            <v-btn class="mx-auto styleButton" @click="logOut">Client Logout</v-btn>
        </v-row>
        <br>
        <DeleteClients/>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </v-container>
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
    <FooterMvp/>
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import router from '@/router';
import HeaderMvp from "@/components/HeaderMvp.vue";
import FooterMvp from "@/components/FooterMvp.vue"
import DeleteClients from "@/components/DeleteClients.vue";
import EditClients from "@/components/EditClients.vue";

    export default {
        name: "PortFolioProfile",
        components: {
            HeaderMvp,
            FooterMvp,
            DeleteClients,
            EditClients
        },
        data() {
            return {
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
                url: this.url + "/api/clients",
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
                router.push(`//loginClient`)
                });
        },
    }
</script>

<style scoped>

.bodyWrap{
        /* background-image: url(https://imgs.search.brave.com/R43Gdc2AQBiKlWckaWpR5-s3blyDQ3ONG55iwipwWEM/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/b25pS1hHYlAxSHB6/YkozVlpiM3VRSGFF/NyZwaWQ9QXBp); */
        background-color: #f8ebdf;
        background-repeat: no-repeat;
        background-size: cover;
    }
.styleButton{
        color: black;
        height: 7vh;
        box-shadow: 2px 2px 3px;
    }

</style>