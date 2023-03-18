<template>
    <div>
        <v-container>
            <!-- Might just totally remove email as it cant be changed according to my api database set-up anyways-->
            <h2>Edit Personal Info.</h2>
                <v-form>
                    <v-text-field
                    v-model="email"
                    label="email (NO CHANGE PERMITTED HERE. KEEP EMAIL SAME!!)"
                    prepend-icon="mdi-email"
                    />
                    <v-text-field
                    v-model="username"
                    label="Username"
                    prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                    v-model="firstName"
                    label="First name"
                    prepend-icon="mdi-mouse"
                    />
                    <v-text-field
                    v-model="lastName"
                    label="Last name"
                    prepend-icon="mdi-mouse"
                    />
                    <v-text-field
                    v-model="password"
                    label="password"
                    prepend-icon="mdi-lock"
                    />
                    <v-btn color="green" large class="styleButton"
                    @click="editClient">Save Changes
                    </v-btn>
                </v-form>
            </v-container>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

    export default {
        name: "EditClients",
        data() {
            return {
                email: "",
                username: "",
                firstName: "",
                lastName: "",
                password: ""
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
                        email: this.email,
                        username: this.username,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        password: this.password
                    }
                    }).then((response) =>{
                    console.log(response);
                    console.log("Successful updated info!")
                    cookies.remove(`clientToken`)
                    cookies.remove(`client`)
                    router.push(`/loginClient`)
                    }).catch((error)=>{
                    console.log(error);
                    console.log("Failed to edit!")
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