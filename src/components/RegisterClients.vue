<template>
    <div class="bodyWrap">
        <HeaderMvp/>
        <br>
            <v-row>
                <h1 class="mx-auto">Client Register</h1>
            </v-row>
            <br>
                <v-btn class="ml-5 styleButton" 
                router-link to="/">Client Login
                </v-btn>
                <br>
                <br>
                <v-btn class="ml-5 styleButton"
                router-link to="/">MainPage
                </v-btn>
                <br>
                <br>
            <br>
            <br>
                <v-container>
                    <div class="formData">
                        <v-form>
                            <v-text-field
                            v-model="formData.email"
                            :rules="emailRules"
                            label="E-mail"
                            prepend-icon="mdi-email"
                            required
                            />
                            <v-text-field
                            v-model="formData.username"
                            :rules="[() => !!formData.username || 'This field is required']"
                            label="username"
                            placeholder="JohnDoe7"
                            prepend-icon="mdi-account"
                            required
                            />
                            <v-text-field
                            v-model="formData.firstName"
                            :rules="[() => !!formData.firstName || 'This field is required']"
                            label="First Name"
                            placeholder="John"
                            prepend-icon="mdi-account"
                            required
                            />
                            <v-text-field
                            v-model="formData.lastName"
                            :rules="[() => !!formData.lastName || 'This field is required']"
                            label="Last Name"
                            prepend-icon="mdi-account"
                            placeholder="Doe"
                            required
                            />
                            <v-text-field
                            v-model="formData.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Enter Password"
                            hint="At least 8 characters"
                            counter
                            prepend-icon="mdi-lock"
                            @click:append="show1 = !show1"
                            />
                            <br>
                            <v-btn color="green" large class="styleButton"
                            @click="postClients">Client Register
                            </v-btn>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                        </v-form>
                    </div>   
                </v-container>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import HeaderMvp from "@/components//HeaderMvp.vue";
import FooterMvp from "@/components/FooterMvp.vue";

    export default {
        name: "RegisterClients",
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
                    username: "",
                    firstName: "",
                    lastName: "",
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
            }
        },
        methods: {
            postClients() {
                axios.request({
                    method: "POST",
                    url: this.url + "/clients",
                data: {
                    email: this.formData.email,
                    username: this.formData.username,
                    firstName: this.formData.firstName,
                    lastName: this.formData.lastName,
                    password: this.formData.password
                }
                }).then((response)=>{
                    console.log("Successfully registered new client")
                    console.log(response)
                    router.push('/client-login')
                }).catch((error)=>{
                    console.log(error);
                })
            }
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
    .styleButton{ 
        color: black;
        height: 4vh;
        box-shadow: 2px 2px 3px;
    }
    .formData{
        width: 50vw;
        transform: relative;
        left: 50%;
        transform: translateX(50%);
    }
</style>