<template>
    <v-card align="center" justify="center" color="orange" class="rounded-lg" flat height="10vh">
        <v-row>
            <v-col cols="12" sm="4">
                <v-card align="center" justify="center" color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar align="center" justify="center" flat color="black" class="mt-2">
                        <h4 class="white--text mx-auto">Available Balance: ""</h4>
                    </v-app-bar>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar flat color="black" class="mt-2">
                        <h4 class="white--text mx-auto">Portfolio Gains: "9650%"</h4>
                    </v-app-bar>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="transparent" class="rounded-lg mx-2" flat>
                    <v-app-bar flat color="black" class="mt-2">
                        <h4 class="white--text mx-auto">Placeholder: ""</h4>
                    </v-app-bar>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "PortBalance"
    }
</script>

<style scoped>

</style>