<template>
    <div>
        <v-container>
            <h2>Delete User</h2>
            <v-btn color="green" large class="styleButton"
            @click="deleteClient">Delete User
            </v-btn>
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
                //Absolutely nothing in terms of data
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
    color: black;
    height: 7vh;
    box-shadow: 2px 2px 3px;
}
</style>