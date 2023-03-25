<template>
    <div>
        <label for="Enter portId#">Enter portfolio ID to delete:</label>
        <input id="Delete port ID" type="text" v-model="portId">
        <v-btn color="black white--text" large class="styleButton" @click="deleteFolio">Delete Portfolio</v-btn>
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
                portId: "",
            }
        },
        methods: {
            // getPortfolioIdCookieValue(portfolioId) {
            //     const cookieName = `portfolioId_${portfolioId}`;
            //     return cookies.get(cookieName);
            // },
            deleteFolio() {
                axios.request({
                    method: "DELETE",
                    url: this.url + "/portfolio",
                    headers: {
                        // 'portId' : this.getPortfolioIdCookieValue(15)
                        'portId' : this.portId
                    },
                    data: {
                        id: this.portId,
                        name: this.name,
                        purchasePrice: this.purchasePrice,
                        quantity: this.quantity,
                    }
                    }).then((response)=>{
                    console.log(response);
                    console.log("Successful Deletion");
                    alert("Successfully Deleted Portfolio!")
                    cookies.remove(`portfolioId`)
                    router.push('/portfolio')
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