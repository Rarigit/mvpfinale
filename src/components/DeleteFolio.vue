<template>
    <div>
        <v-container>
            <v-btn color="black white--text" large class="styleButton" @click="deleteFolio">Delete Portfolio</v-btn>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

    export default {
        name: "DeleteFolio",
        data() {
            return {
                url: process.env.VUE_APP_API_URL,
            }
        },
        methods: {
            deleteFolio() {
                axios.request({
                    method: "DELETE",
                    url: this.url + "/portfolio",
                headers: {
                    'portId' : cookies.get('portfolioId')
                },
                data: {
                    id: this.id,
                    name: this.name,
                    purchasePrice: this.purchasePrice,
                    quantity: this.quantity,
                }
                }).then((response)=>{
                console.log(response);
                console.log("Successful Deletion");
                alert("Successfully Deleted Portfolio!")
                cookies.remove(`clientToken`)
                cookies.remove(`client`)
                cookies.remove(`portfolioId`)
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

</style>