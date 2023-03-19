<template>
    <div>
        <v-container>
            <v-btn color="black" large class="styleButton" @click="deleteClient">Delete User</v-btn>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

    export default {
        name: "DeleteClients",
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
            }
        },
        methods: {
            deleteClient() {
                axios.request({
                    method: "DELETE",
                    url: this.url + "/clients",
                headers: {
                    'token' : cookies.get('clientToken')
                },
                data: {
                    email: this.email,
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                }
                }).then((response)=>{
                console.log(response);
                console.log("Successful Deletion");
                alert("Successfully Deleted Client!")
                cookies.remove(`clientToken`)
                cookies.remove(`client`)
                router.push('/loginClient')
                }).catch((error)=>{
                console.log(error);
                console.log("Failed to delete!")
                })
            }
        },
    }
</script>

<style scoped>
.styleButton{
    color: white;
    height: 7vh;
    /* box-shadow: 2px 2px 3px; */
}
</style>