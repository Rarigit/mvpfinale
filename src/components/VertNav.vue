<template>
    <v-app>
    <nav>
        <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="200" class="black">
            <div class="portLogo">
                <v-avatar class="d-block text-center mx-auto mt-4 my-10" size="40">
                    <v-img src="@/assets/logwhite.png" class="vImage"></v-img>
                </v-avatar>
            </div>
            <v-list>
                <v-list-item class="mb-10" router to="/registerFolio">
                    <v-list-item-content>
                        <v-text-field class="mb-1" large prepend-icon="mdi-account" label="Portfolio Register"></v-text-field>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list>
            <v-list-item class="mb-10" router to="/portProfile">
                <v-list-item-content>
                    <v-text-field class="mb-1" large prepend-icon="mdi-pen" label="Portfolio Profile"></v-text-field>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-list>
            <v-list-item class="mb-10" router to="/predictions">
                <v-list-item-content>
                    <v-text-field class="mb-1" large prepend-icon="mdi-eye" label="Predictions"></v-text-field>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-list>
            <v-list-item class="mb-10" router to="/registerPredict">
                <v-list-item-content>
                    <v-text-field class="mb-1" large prepend-icon="mdi-account" label="Predict Register"></v-text-field>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-list style="position: absolute; bottom:0" class="ml-12" flat>
                <v-btn @click="logOut" tile outlined dark class="ml-5" >Sign Out</v-btn>
            </v-list>
        </v-navigation-drawer>
    </nav>
    </v-app>
</template>

<script>
import cookies from "vue-cookies";
// import axios from "axios";
import router from '@/router';


    export default {
        name: "VertNav",
        data() {
            return {
                loggedIn : false
            }
        },
        methods: {
            logOut() {
                cookies.remove(`clientToken`)
                cookies.remove('client')
                cookies.remove('portfolioId')
                cookies.remove('predictResult')
                router.push(`/`)
                this.loggedIn = false
            },
        },
    }
</script>

<style scoped>

.portLogo{
    display: flex;
    justify-content: center;
}

.vImage{
    height: 5vh;
    width: 5vw;
}
.styleButton{
        color: white;
        height: 7vh;
        box-shadow: 2px 2px 3px;
    }
</style>