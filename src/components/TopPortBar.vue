<template>
    <v-app-bar color="#029aff" flat class="mt-0">
        <v-row class="mx-auto">
            <!-- Gonna put a get request on this page and display current User's name below -->
            <v-spacer></v-spacer>
            <h4 class="black--text mt-2">Welcome back: "Client Name"</h4>
        </v-row>
        <v-spacer></v-spacer>
        <v-row class="mx-auto">
            <h4 class="black--text mt-2">Client Id #:""</h4>
        </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: "TopPortBar"
    }
</script>

<style scoped>

.portStyle{
    font: black;
    justify-content: center;
    display: flex;
    justify-self: center;
    align-items: center;
}

</style>