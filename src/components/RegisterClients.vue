<template>
    <div class="bodyWrap">
        <HeaderMvp/>
        <br>
        <v-row>
            <h1 class="mx-auto">Client Register</h1>
        </v-row>
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
                                                <!-- <div class="formData"> -->
                                                    <v-text-field
                                                    v-model="formData.userName"
                                                    :rules="[() => !!formData.userName || 'This field is required']"
                                                    label="Enter userName"
                                                    placeholder="JohnDoe7"
                                                    prepend-icon="mdi-account"
                                                    required
                                                    />
                                                    <v-text-field
                                                    v-model="formData.firstName"
                                                    :rules="[() => !!formData.firstName || 'This field is required']"
                                                    label="Enter First Name"
                                                    placeholder="John"
                                                    prepend-icon="mdi-account"
                                                    required
                                                    />
                                                    <v-text-field
                                                    v-model="formData.lastName"
                                                    :rules="[() => !!formData.lastName || 'This field is required']"
                                                    label="Enter Last Name"
                                                    prepend-icon="mdi-account"
                                                    placeholder="Doe"
                                                    required
                                                    />
                                                    <v-text-field
                                                    v-model="formData.email"
                                                    :rules="emailRules"
                                                    label="Enter e-mail"
                                                    prepend-icon="mdi-email"
                                                    required
                                                    />
                                                    <v-text-field
                                                    v-model="formData.password"
                                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :rules="[rules.required, rules.min]"
                                                    :type="show1 ? 'text' : 'password'"
                                                    name="input-10-1"
                                                    label="Enter password"
                                                    hint="At least 8 characters"
                                                    counter
                                                    prepend-icon="mdi-lock"
                                                    @click:append="show1 = !show1"
                                                    />
                                                    <br>
                                                    <br>
                                                    <v-row class="mx-auto">
                                                        <v-btn color="green" large class="styleButton" @click="postClients">Client Register</v-btn>
                                                    </v-row>
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
                                                <h2 class="text-center">Already have an account?</h2>
                                                <h4 class="text-center">
                                                    Log in here
                                                </h4>
                                            </v-card-text>
                                            <br>
                                            <div class="text-center">
                                                <v-btn tile outlined dark class="ml-5" router-link to="/loginClient">Login</v-btn>
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
        </v-container>
        <FooterMvp/>
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
                url: process.env.VUE_APP_API_URL,
                show1: false,
                formData: {
                    userName: "",
                    firstName: "",
                    lastName: "",
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
            }
        },
        methods: {
            postClients() {
                axios.request({
                    method: "POST",
                    url: this.url + "/clients",
                data: {
                    userName: this.formData.userName,
                    firstName: this.formData.firstName,
                    lastName: this.formData.lastName,
                    email: this.formData.email,
                    password: this.formData.password
                }
                }).then((response)=>{
                    console.log("Successfully registered new client")
                    console.log(response)
                    router.push('/loginClient')
                }).catch((error)=>{
                    console.log(error);
                })
            }
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