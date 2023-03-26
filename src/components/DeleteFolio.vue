<template>
    <div>
        <br>
        <label for="Enter portId#">Enter portfolio ID: </label>
        <input id="Delete port ID" type="text" class="highlight" v-model="portId">
        <v-spacer></v-spacer>
        <br>
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
            deleteFolio() {
                axios.request({
                    method: "DELETE",
                    url: this.url + "/portfolio",
                    headers: {
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

.highlight{
    border: 2px solid yellow;
    background-color: lawngreen;
}
</style>