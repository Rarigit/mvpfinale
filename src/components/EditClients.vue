<template>
    <div>
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
                                                    <h1>Edit Personal Info.</h1>
                                                        <br>
                                                        <v-text-field
                                                        v-model="password"
                                                        label="Enter password"
                                                        prepend-icon="mdi-lock"
                                                        />
                                                        <v-text-field
                                                        v-model="userName"
                                                        label="Enter userName"
                                                        prepend-icon="mdi-account-circle"
                                                        />
                                                        <v-text-field
                                                        v-model="firstName"
                                                        label="Enter First Name"
                                                        prepend-icon="mdi-mouse"
                                                        />
                                                        <v-text-field
                                                        v-model="lastName"
                                                        label="Enter Last Name"
                                                        prepend-icon="mdi-mouse"
                                                        />
                                                        <br>
                                                        <v-row class="mx-auto">
                                                            <v-btn color="light-blue" large class="styleButton" @click="editClient">Save Changes</v-btn>
                                                        </v-row>
                                                        <br>
                                                        <br>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                                        <div style="text-align:center; padding: 180px 0;">
                                            <v-card-text class="white--text">
                                                <h2 class="text-center">Are you sure you want to delete?</h2>
                                                <h3 class="text-center">
                                                    Delete your profile
                                                </h3>
                                            </v-card-text>
                                            <br>
                                            <div class="text-center">
                                                <DeleteClients/>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
// import router from "@/router";
import cookies from "vue-cookies";
import DeleteClients from "@/components/DeleteClients.vue"

    export default {
        name: "EditClients",
        components: {
            DeleteClients,
        },
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
                // email: "",
                password: "",
                userName: "",
                firstName: "",
                lastName: "",
                // password: ""
            }
        },
        methods: {
            editClient() {
                axios.request({
                    method: "PATCH",
                    url: this.url + "/clients",
                    headers: {
                        'token' : cookies.get('clientToken')
                    },
                    data: {
                        // email: this.email,
                        password: this.password,
                        userName: this.userName,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        // password: this.password
                    }
                    }).then((response) =>{
                    console.log(response);
                    console.log("Successful updated info!")
                    alert("Successfully updated Client Info.")
                    // cookies.remove(`clientToken`)
                    // cookies.remove(`client`)
                    // router.push(`/loginClient`)
                    }).catch((error)=>{
                    console.log(error);
                    console.log("Failed to edit!")
                    })
            }
        },
        mounted () {
            //Bun code messes up cookies upon refresh
            //Deletes cookies after i press the back button. Hopefully it works. Yup it does upon refresh
            // window.onbeforeunload = function() {
            // document.cookie = "clientToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // document.cookie = "client=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // };
        },
    }
</script>

<style scoped>
.styleButton{
    color: white;
    height: 7vh;
    box-shadow: 2px 2px 3px;
}
</style>